import queries from '../Scripts/queries';
import mutations from '../Scripts/mutations';
const resolvers = {
   Query: {
        allUsers: async () => {
          return await queries.allUsers();
        },
        findUser: async(_:any,args:{id:number})=>{
            return await queries.findUser(_,args);
        },
        findUserName: async (_:any,args:{name:string})=>{
            return await queries.findUserName(_,args);
        }
    },
    Mutation:{
        createUser: async (_:any,args:{name:string,last_name:string,age:number,country:string})=>{
            return await mutations.createUser(_,args);
        },
        updateUser:async (_:any,args:{id:number,name:string,last_name:string,age:number,country:string})=>{
            return await  mutations.updateUser(_,args);
        },
        updateUserName:async(_:any,args:{id:number,name:string})=>{
            return await mutations.updateUserName(_,args);
        },
        deleteUser : async(_:any,args:{id:number,name:string})=>{
            return await mutations.deleteUser(_,args)
        }
    }
};

export default resolvers;
