
const Joi = require('joi');
// const joi = require('joi');


module.exports = {
    registroSchema:Joi.object({

        usuario: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        
        pass: Joi.string()
            .pattern(new RegExp(`^[a-zA-Z0-9]{3,30}$`))
            .required(),
        
        id: Joi.number()
            .integer()
            .min(1)
            .max(150)
            .required(),
    }),
};
// module.exports = validation
