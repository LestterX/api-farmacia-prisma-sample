import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { IFuncionario } from "../models/Funcionario";

const createProvider = async (fUser: Omit<IFuncionario, 'id'>): Promise<String | Error> => {
       
    try {
        const funcionario = await prisma.funcionario.create({
            data: {
                name: fUser.name,
                email: fUser.email,
                password: fUser.password
            },
        })

        if(typeof funcionario === 'object'){
            console.log(funcionario);            
            return funcionario.id;            
        }
        return new Error('Erro ao cadastrar funcionário')
    } catch (error) {
        console.log(error);        
        return new Error('Erro ao cadastrar funcionário')
    }

};

export { createProvider };