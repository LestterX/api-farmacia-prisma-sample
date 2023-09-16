import { IFuncionario } from "../../database/models/Funcionario";
import { LoginProvider } from "../../database/LoginProvider";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface IBodyProps extends Omit<IFuncionario, 'id'>{}

export const signup = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    //Adicionar Validação com YUP talvez (Pesquisar Alternativas)

    const result = await LoginProvider.createProvider(req.body)

    if(result instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: result.message
        })
    }

    return res.status(StatusCodes.CREATED).json({
        result
    })

}
