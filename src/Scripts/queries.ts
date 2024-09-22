import {PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const queries ={
    allUsers : async ()=>{
        try{
            const result = await prisma.user.findMany();

            if(!result || result.length === 0){
                return {success: false, msg: 'data no encontrada'}
            }

            return result;
        }catch(err){
            
            console.error(err);
            return {success: false,msg : 'error al econtrar la data'}
        }
    },
    findUser: async (_:any,args: {id:number})=>{
    
            const userId = typeof args.id === 'string' ? parseInt(args.id, 10) : args.id;

            const result = await prisma.user.findFirst({where:{
                id: userId
            }});
            return result;

    },
    findUserName: async (_:any,args:{name:string})=>{
        return await prisma.user.findFirst({where:{
            name:args.name
        }});
    }
}
export default queries;