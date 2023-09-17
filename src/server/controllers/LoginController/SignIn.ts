import { Request, Response } from "express";
import { IFuncionario } from "../../database/models/Funcionario";
import { LoginProvider } from "../../database/LoginProvider";
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

interface IBodyProps extends Omit<IFuncionario, 'id' | 'name'> { }

export const signin = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const result = await LoginProvider.getProvider({
        email: req.body.email,
        password: req.body.password,
    });

    if (result instanceof Error) {
        return res.status(StatusCodes.NOT_FOUND).json({
            errors: `Erro ao fazer login. ${result.message}`
        })
    }

    try {      
        const token = jwt.sign({ userId: result.id }, process.env.SECRET_KEY || '', { expiresIn: 900 });
        return res.status(StatusCodes.OK).json({
            userName: result.name,
            userId: result.id,
            token,
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: 'Erro ao gerar token de autenticação'
        })
    }

};