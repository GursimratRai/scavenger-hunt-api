// Acquiring Express
const express = require('express');
// assigning port 
const port = process.env.PORT || 8000;
//use express
const app = express();
//Use express router
const router = express.Router();
//for cors
const cors = require('cors');

//Handle cross-origin resource sharing.
app.use(cors()); 

// Express In-Build Parser
// app.use(express.urlencoded());
app.use(express.urlencoded({extended:false}))

app.use(express.json())

// Acquiring Mongodb Data base
const db = require('./config/mongoose');
db();

// Acquiring route
app.use('/',require('./router'));

// Starting our Express Server
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log(`Express Server is up and Running on Port : ${port}`);
})