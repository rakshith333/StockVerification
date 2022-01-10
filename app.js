//jshint esversion-6
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const app = express();


const connectDB = require('./server/database/connection')
connectDB();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

//log request
app.use(morgan('tiny'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use('/css',express.static(path.resolve(__dirname,"public/css")));
app.use('/images',express.static(path.resolve(__dirname,"public/images")));
app.use('/js',express.static(path.resolve(__dirname,"public/js")));


app.use("/",require('./server/routes/router'));
app.use("/adminlogin",require('./server/routes/router'));
app.use("/adminsignup",require('./server/routes/router'));
app.use("/others",require('./server/routes/router'));
app.use("/admindetails",require('./server/routes/router'));
app.use("/addadmin",require('./server/routes/router'));










app.listen(3000,function(){
  console.log("Server started on port 3000...");
});
