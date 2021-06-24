import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"; //senha inserida no sistema e compara com a do Hash
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UserRepositories";



interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const UserRepositories = getCustomRepository(UsersRepositories);

        const user = await UserRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, "0ea2f9d76b7d437b163dc04b3d9f2abe", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;




        //verificar se o email existe
        //verificar se senha está correta
        //gerar o token


    }


}

export { AuthenticateUserService };