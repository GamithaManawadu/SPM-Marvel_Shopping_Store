
const Customer = require('../models/customer.model')

const customersCount = async(req,res)=>{
    try{
        const customerCount = await Customer.count()
        res.json(customerCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = { customersCount }