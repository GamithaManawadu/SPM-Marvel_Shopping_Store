const express = require('express');
const router = express.Router();
const  Product  = require("../models/product.model");
const multer = require('multer');


const { Router } = require('express');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")




const {
	getAllProducts,
	addProduct,
	getProducts,
} = require("../controllers/product.controller");
// verifyAdminAuth = require("../auth/verifyAdminAuth");
// verifyCustomerAuth = require("../auth/verifyCustomerAuth");

//.get("/", verifyAdminAuth, getAllDeliveryServices);
router.get("/",getAllProducts);
router.get("/:id", getProducts);
router.post("/add", addProduct);

//=================================
//             Product
//=================================

/*router.post("/uploadImage", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});


router.post("/uploadProduct", (req, res) => {

    //save all the data we got from the client into the DB 
    const product = new Product(req.body)   
       
    product.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});





router.post("/getProducts", (req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    console.log(findArgs)

    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }

});


//?id=${productId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/products_by_id", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        productIds = [];
        productIds = ids.map(item => {
            return item
        })
    }

    console.log("productIds", productIds)


    //we need to find the product information that belong to product Id 
    Product.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
});

router.route('/').get(function(req, res) {
    Product.find(function(err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
});

router.route('/:id').get(function(req, res){
    let id = req.params.id;
    Product.findById(id, function(err, user){
        res.json(user);
    });
});

router.route('/update/:id').post(function(req, res) {
    Product.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send('data is not found');
        else
            user.title = req.body.title;
            user.description = req.body.description;
            user.price = req.body.price;

            user.save().then(user => {
                res.json('Product updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/:id').delete(function(req, res) {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data is deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
*/



module.exports = router;
