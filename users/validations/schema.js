const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        name: joi.string().min(5).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        number: joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required()
    })
};

module.exports = schema;