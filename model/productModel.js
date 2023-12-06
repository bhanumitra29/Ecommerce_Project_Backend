const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    "id": {
        type: Number,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "image": {
        type: String,
        required: true
    },
    "price": {
        type: String,
        required: true
    },
    "f1": {
        type: String,
        required: true
    },
    "f2": {
        type: String,
        required: true
    },
    "f3": {
        type: String,
        required: true
    },
    "f4": {
        type: String,
        required: true
    },
    "f5": {
        type: String,
        required: true
    }
    
})

const productDB = mongoose.model("productData", dataSchema);

module.exports = {productDB};