const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        trim: true
    },
    type:{
        type: String,
        require:true,
        trim: true
    },
    date:{
        type:Date,
        require: true,
        default: Date.now
    }
});

module.exports = mongoose.model('payments', paymentSchema)