import {PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const queries ={
    allUsers : async ()=>{
        try{
            const result = await prisma.user.findMany();
            if(!result || result.length === 0){
                return {success: false, msg: 'data no encontrada'}
            }
            return {success: true,data : result};
        }catch(err){
            console.error(err);
            return {success: false,msg : 'error al econtrar la data'}
        }
    }
}
export default queries;