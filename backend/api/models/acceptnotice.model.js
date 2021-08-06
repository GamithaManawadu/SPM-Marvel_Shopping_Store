const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    notice:{
        type: String
    },
    content:{
        type : String,
        require: true
    },
    date:{
        type: Date,
        require: true,
        default: Date.now 
    }

});

module.exports = mongoose.model('schema',schema);