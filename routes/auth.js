const router= require('express').Router();
const User= require('../models/User');
const {registerValidation} = require('../validate');
//Routes directing to ChargingPoint

//Home get route
router.get('/register',(req,res)=>{
    res.send('register');
});

router.post('/register',async(req,res)=>{

    //User Validation
    const {error}= registerValidation(req.body);
    
    if(error) return res.status(404).send('Dirty request');

    //Checking if existing user
    const existsEmail = await User.findOne({email: req.body.email});
    if(existsEmail) return res.send('This Email is already taken!!');
    //creating new user
    const user=new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email,
        password:req.body.password
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

module.exports = router;