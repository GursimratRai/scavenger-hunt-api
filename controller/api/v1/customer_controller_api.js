//Acquiring Branch modal
const Branch = require("../../../models/branch");

//Acquiring Customer modal
const Customer = require("../../../models/customer");

//Asynchronous Function for fetching all the branches list from the database
module.exports.index = async function (req, res) {
  try {
    const list = await Branch.find(
      {
        "Pincode covered":req.body.pin
      },
      ["Branch Name","Branch Incharge","Address","City","Contact Number"]
    );

    // create Customer document in the database
    await Customer.create({
        username: req.body.username,
        contact: req.body.contact,
        pincode: req.body.pin
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        message: "Could not retrieve branch details",
      });
    }

    return res.json(200, {
      success: true,
      message: "List of Branches",
      data: {
        branches: list,
      },
    });
  } catch (err) {
    return res.json(404, {
      success: false,
      message: "Request Not Complete",
    });
  }
};
