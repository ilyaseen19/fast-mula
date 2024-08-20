import Joi from "joi";

const create = Joi.object({
    userName: Joi.string().required().max(15),
    fullName: Joi.string().required().max(30),
    password: Joi.string().required().min(6),
    email: Joi.string().required().email(),
    role: Joi.string().required(),
    department: Joi.string().required(),
    phone: Joi.number().required(),
});

const login  = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
})

const updateAdmin = Joi.object({
    userName: Joi.string().required().max(15),
    email: Joi.string().required().email(),
    fullName: Joi.string().required().max(30),
    phone: Joi.number().required(),
    role: Joi.string().required(),
    department: Joi.string().required(),
})

const updatePassword = Joi.object({
    oldPassword: Joi.string().required().min(6),
    newPassword: Joi.string().required().min(6),
})

export default { create, login, updateAdmin, updatePassword };
