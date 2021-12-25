const express = require('express');
const mongoose=require('mongoose');

const app = express();

//Requiring env
require('dotenv').config();

//Connecting to DB
mongoose.connect(process.env.DB_CONNECT,
()=> console.log('Connected to DB!'));

//import Routes
const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
//Middle wares
app.use(express.json());

//Route Middlewares
app.use('/ChargingPoint',homeRoute);
app.use('/ChargingPoint/api/user',authRoute);

//Listening to port 3000
app.listen(3000, () => {
    console.log('Server started at port: 3000');
});