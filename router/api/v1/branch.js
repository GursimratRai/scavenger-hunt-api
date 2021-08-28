const express = require('express');

//Use Express Router
const router = express.Router();

//Use Controller
const branchController = require("../../../controller/api/v1/branch_controller_api");

//Use Passport
// const passport = require('passport');

//router for logging in the branch representative
router.post('/login',branchController.createSession);
//router for creating a new user
// router.post('/signup',branchController.signUp);

module.exports = router;

