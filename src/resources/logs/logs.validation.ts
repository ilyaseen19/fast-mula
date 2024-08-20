import Joi from "joi";

const createLog = Joi.object({
    userId: Joi.number().required(),
    userType: Joi.string().required(),
});

export default { createLog };
