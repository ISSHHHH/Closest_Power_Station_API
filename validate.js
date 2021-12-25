//Validation
const Joi= require('@hapi/joi');

//Register Validation
const registerValidation = (data)=>{
    const validSchema= Joi.object({
        first_name:Joi.string().min(3).required(),
        last_name:Joi.string().min(3).required(),
        email:Joi.string().min(3).required().email(),
        password:Joi.string().min(8).required()
    });

    return validSchema.validate(data);
};

//Lofin Validation
const loginValidation = (data)=>{
    const validSchema= Joi.object({
        email:Joi.string().min(3).required().email(),
        password:Joi.string().min(8).required()
    });

    return validSchema.validate(data);
};

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;