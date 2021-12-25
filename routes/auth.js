const router= require('express').Router();
const User= require('../models/User');
const {registerValidation,loginValidation} = require('../validate');
const bcrypt = require('bcryptjs');
//Routes directing to ChargingPoint

//Home get route
router.get('/register',(req,res)=>{
    res.send('register');
});

//Register Route
router.post('/register',async(req,res)=>{

    //User Validation
    const {error}= registerValidation(req.body);   
    if(error) return res.status(404).send('Dirty request');


    //Checking if existing user
    const existsEmail = await User.findOne({email: req.body.email});
    if(existsEmail) return res.send('This Email is already taken!!');


    //Hashing passwords
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    //creating new user
    const user=new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email,
        password:hashPassword
    });

    try{
        const savedUser= await user.save();
        res.json(savedUser);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
});

//Login Route
router.post('/login',async(req,res)=>{

    //User Validation
    const {error}= loginValidation(req.body);   
    if(error) return res.status(404).send('Dirty request');


    //Checking if existing user
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.send('This Email is not registered!!');

    //Password Validation
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send('Invalid Pssword!!');

    res.send('Login Successfull!!');

});

module.exports = router;