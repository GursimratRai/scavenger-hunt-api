const express = require('express');

//Use Express Router
const router = express.Router();

//branch Controller
const customerController = require('../../../controller/api/v1/customer_controller_api');

//for fetching all the branches
router.post('/branches',customerController.index);

module.exports = router;

