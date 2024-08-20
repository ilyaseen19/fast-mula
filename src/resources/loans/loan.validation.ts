import Joi from "joi";

const requestLoan = Joi.object({
    customerId: Joi.string().required(),
    terms: Joi.boolean().required(),
    amount: Joi.number().required(),
    duration: Joi.number().required(),
    dateOfApplication: Joi.date().required(),
    interest: Joi.number().required(),
    amountToPay: Joi.number().required(),
    useOfLoan: Joi.string().required(),
    paymentMethod: Joi.number().required(),
    whereHeard: Joi.string().required(),
    facialRecog: Joi.string().required(),
    loanType: Joi.string().required(), // cash / agri / farm animals
    nameAttached: Joi.string().required(),
})

export default { requestLoan }