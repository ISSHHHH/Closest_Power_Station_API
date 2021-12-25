const router= require('express').Router();

//Routes directing to ChargingPoint

//Home get route
router.get('/',(req,res)=>{
    res.send('Home page');
});

module.exports = router;