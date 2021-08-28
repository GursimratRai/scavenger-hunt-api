const express = require('express');
const router = express.Router();

//router for branches
router.use('/branch',require('./branch'));
//router for customer
router.use('/customer',require('./customer'));

module.exports = router;

