import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
const mutations = {
    createUser: async (_:any,args: {name:string,last_name:string,age:number,country:string}) =>{
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
}
export default mutations;