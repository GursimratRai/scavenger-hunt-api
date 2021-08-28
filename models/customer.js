//Acquiring mongoose
const mongoose = require('mongoose');

//Creating a Schema
const customerSchema = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Customer = mongoose.model('customer',customerSchema);

module.exports = Customer;