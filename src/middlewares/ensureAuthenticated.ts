import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";


interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {



    //Receber token
    const authToken = request.headers.authorization;


    //validar o token se estiver preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "0ea2f9d76b7d437b163dc04b3d9f2abe") as IPayLoad;

        request.user_id = sub;




        return next();

    } catch (err) {
        return response.status(401).end();
    }






}