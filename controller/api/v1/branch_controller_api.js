const Branch = require("../../../models/branch");
const Customer = require("../../../models/customer");

//create Session for already existed users.
module.exports.createSession = async function (req, res) {
  try {
    let branch = await Branch.findOne({ "Branch Name": req.body.branchName });

    if (!branch || branch.password != req.body.password) {
      return res.json(422, {
        success: false,
        error: "Invalid Username or Password",
      });
    }

    const option = req.body.branchName === "Admin" ? {} : { pincode: { $in: branch["Pincode covered"] } };
    const customersList = await Customer.find(option, [
      "username",
      "contact",
      "pincode",
      "createdAt",
    ]).sort({ createdAt: "descending" });

    //return the list of customers whose need help
    if (!customersList) {
      return res.status(404).json({
        success: false,
        message: "Could not retrieve Customer details",
      });
    }

    return res.json(200, {
      success: true,
      message: "Logged In Successfully",
      data: {
        customers: customersList,
      },
    });
  } catch (err) {
    return res.json(500, {
      success: false,
      error: "Internal Server Error",
    });
  }
};
