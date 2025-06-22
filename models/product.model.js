const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    price:{
        type: String,
        required:true,
    }
})
const Product = mongoose.model('Product', productSchema);

module.exports = Product