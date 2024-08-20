import { Response, Request, NextFunction, RequestHandler } from "express";
import Joi from "joi";

const validationMiddleware = (schema: Joi.Schema): RequestHandler => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        const validationOptions = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        };

        try {
            const value = await schema.validateAsync(req.body, validationOptions);

            req.body = value;
            next();
        } catch (e) {
            let errors: string[] = [];
            e.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message);
            });

            res.status(400).json({
                errors,
            });
        }
    };
};

export default validationMiddleware;
