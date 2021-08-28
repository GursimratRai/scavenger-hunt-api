//Acquiring mongoose
const mongoose = require("mongoose");

//Creating a Schema
const branchSchema = mongoose.Schema(
  {
    "Insitution Name": {
      type: String,
      required: true,
    },
    "Branch Name": {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    "Contact Number": {
      type: String,
      required: true,
    },
    "Branch Incharge": {
      type: String,
      required: true,
    },
    "Pincode covered": [
      {
        type: Number,
        required: true,
      },
    ],
    password:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true,
  }
);

const Branch = mongoose.model("branch", branchSchema);

module.exports = Branch;
