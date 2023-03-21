const express  = require('express');
const morgan = require('morgan'); 
const dotenv =require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config()

require("./db");
const app = express();
const user = require('./routes/user')
app.use

app.listen(process.env.PORT, (err)=> {
    if (err) {
        console.log(err)
    }
    else {
        console.log("listening on port 5001")
    }
})
//EndPoint
app.get ("/server-status", (req,res) => {
    console.log("req from client");
    res.status(200).send("Hello from Server");

})