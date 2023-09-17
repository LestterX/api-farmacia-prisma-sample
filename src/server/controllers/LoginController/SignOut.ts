import { Request, Response } from "express"
import { readFileSync, writeFileSync } from "fs";
import { IFuncionario } from "../../database/models/Funcionario";
import path from "path";

interface IBodyProps extends Omit<IFuncionario, 'name' | 'email' | 'password'> { }
// interface IBlackListedToken {
//     id: string,
//     token: string
// }

export const signout = (req: Request<{}, {}, IBodyProps>, res: Response) => {
    // const token = req.headers['x-access-token']
    // let tokens: IBlackListedToken[] = []
    
    // if(tokens.length >= 25) tokens = []

    // try {
    //     tokens.push()
    // } catch (error) {
        
    // }

    // return res.end()
}

// const getBlackListedTokens = (): object => {
//     const tokens = readFileSync(path.resolve(__dirname, 'BlackListedTokens.json'))
//     return tokens
// };

// const addBlackListedToken = (data: object): void => {
//     writeFileSync(path.resolve(__dirname, 'BlackListedTokens.json'), JSON.stringify(data))
// };