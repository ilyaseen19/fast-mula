import { NextFunction, Request, Response } from "express"

const AsyncHandler = (requestHandler: (req: Request, res: Response) => {}) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res)).catch(next)
    }
}

export {AsyncHandler}