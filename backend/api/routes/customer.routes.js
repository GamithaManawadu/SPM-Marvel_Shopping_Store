const express = require("express");
const Customer = require("../models/customer.model")
const Product = require("../models/product.model")
const router = express.Router();

const {
	saveCustomer,
	getCustomerDetails,
    deleteCustomer,
    updateUserProfile,
    deleteUserProfile,

} = require("../controllers/customer.controller");
const verifyAdminAuth = require("../auth/verifyAdminAuth");
const verifyCustomerAuth = require("../auth/verifyCustomerAuth");

//router.get("/:id", verifyAdminAuth, getCustomerDetails);
router.post("/register", saveCustomer);
router.get("/my", verifyCustomerAuth, getCustomerDetails);
router.post("/create", saveCustomer);
router.delete("/:id", deleteCustomer);
router.delete("/deleteProfile",  deleteUserProfile);
router.put("/updateUserProfile",  updateUserProfile);

/*router.route('/').get(function(req, res) {
    Customer.find(function(err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
});

router.route('/update/:id').post(function(req, res) {
    Customer.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send('data is not found');
        else
            user.firstName = req.body.firstName;
			user.lastName = req.body.lastName;
			user.username = req.body.username;
            user.email = req.body.email;
            user.contactNumber = req.body.contactNumber;
			user.address = req.body.address;

            user.save().then(user => {
                res.json('User updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/:id').delete(function(req, res) {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data is deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});*/

//get all customers
router.get("/", (req, res) => {
    Customer.find().exec((err, users) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, users: users });
    });
  });


  
  
  //get a customer
  router.get("/:id", (req, res) => {
    let id = req.params.id;
    
    Customer.findById(id, function (err, user){
      if (err) return res.json({ success: false, err });
      return res.json({ success: true, user });
    });
  });
  
  //update a customer
  router.put("/:id", (req, res) => {
   Customer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (err, user) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
      }
    );
  });
  
  
  
  // delete customer
  router.route("/:id").delete(function (req, res) {
    Customer.findByIdAndDelete(req.params.id)
      .then(() => res.json("Data is deleted!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });


  


  //Add to cart

  router.get('/addToCart', (req, res) => {

    Customer.findOne({ _id: req.user._id }, (err, userInfo) => {
        let duplicate = false;

        console.log(userInfo)

        userInfo.cart.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }
        })


        if (duplicate) {
            Customer.findOneAndUpdate(
                { _id: req.user._id, "cart.id": req.query.productId },
                { $inc: { "cart.$.quantity": 1 } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        } else {
            Customer.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        cart: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        }
    })
});

//Remove from cart

router.get('/removeFromCart', (req, res) => {

  Customer.findOneAndUpdate(
      { _id: req.user._id },
      {
          "$pull":
              { "cart": { "id": req.query._id } }
      },
      { new: true },
      (err, userInfo) => {
          let cart = userInfo.cart;
          let array = cart.map(item => {
              return item.id
          })

          Product.find({ '_id': { $in: array } })
              .populate('writer')
              .exec((err, cartDetail) => {
                  return res.status(200).json({
                      cartDetail,
                      cart
                  })
              })
      }
  )
})

//get cart info

router.get('/userCartInfo', (req, res) => {
  Customer.findOne(
      { _id: req.user._id },
      (err, userInfo) => {
          let cart = userInfo.cart;
          let array = cart.map(item => {
              return item.id
          })


          Product.find({ '_id': { $in: array } })
              .populate('writer')
              .exec((err, cartDetail) => {
                  if (err) return res.status(400).send(err);
                  return res.status(200).json({ success: true, cartDetail, cart })
              })

      }
  )
})

  
module.exports = router;
