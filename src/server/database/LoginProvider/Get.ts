import { IFuncionario } from "../models/Funcionario";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getProvider = async (fUser: Omit<IFuncionario, 'id' | 'name'>)/*: Promise<Object | Error>*/ => {

    try {
        const funcionario = await prisma.funcionario.findFirst({
            where: {
                email: fUser.email,
                password: fUser.password
            },
            select: {
                id: true,
                name: true
            }
        })
        if (typeof funcionario === 'object'&& (funcionario?.id && funcionario.name)) {
            return funcionario; //Confirma a existência dos dados
        }
        return new Error('Funcionário não possue cadastro');
    } catch (error) {
        return new Error('Erro ao encontrar registro');
    }

};

export { getProvider };