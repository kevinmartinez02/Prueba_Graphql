import {PrismaClient} from '@prisma/client'
import { lstat } from 'fs';
import queries from './queries';
const prisma = new PrismaClient();
const creatUser = async (_:any,args: {name:string,last_name:string,age:number,country:string})=>{
  try {
    const newUser = await prisma.user.create({
      data: {
        name: args.name,
        last_name: args.last_name,
        age: args.age,
        country: args.country
      },
    });
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Error creating user');
  }
}

const updateUser = async (
  _: any,
  args: { id: number; name: string; last_name: string; age: number; country: string }
) => {
    try{
        const userFinded = await queries.findUser(_,{id: args.id})
        if(!userFinded){
          throw new Error('Usuario no encontrado')
        }
        return await prisma.user.update({where:{
          id:userFinded.id
        },data:{
          name: args.name,
          last_name: args.last_name,
          age: args.age,
          country : args.country
        }})
    }catch(err){
      console.error(err);
      throw new Error('Error updating user');
    }
  }
const updateUserName = async (_:any,args:{id:number,name:string})=>{
  try{
    const userFinded = await queries.findUser(_,{id: args.id})
    if(!userFinded){
      throw new Error('Usuario no encontrado')
    }
    return await prisma.user.update({where:{
      id:userFinded.id
    },data:{
      name: args.name,
    }})
}catch(err){
  console.error(err);
  throw new Error('Error updating user');
}
}
const deleteUser = async (_,args:{id:number})=>{
  try{
      const userId = typeof args.id === 'string' ? parseInt(args.id, 10) : args.id;
      const result = await prisma.user.delete({where:{
        id:userId
      }})
      return result;
  }catch(err){
      console.error(err)
      throw new Error('Error deleting User');
  }
}
const mutations = {
    createUser: async(_:any,args: {name:string,last_name:string,age:number,country:string})=> await creatUser(_,args),
    updateUser:async (_:any,args:{id:number,name:string,last_name:string,age:number,country:string})=> await updateUser(_,args),
    updateUserName:async(_:any,args:{id:number,name:string})=> await updateUserName(_,args),
    deleteUser : async (_:any,args:{id:number})=> await deleteUser(_,args)
  }
export default mutations;