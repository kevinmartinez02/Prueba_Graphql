import queries from '../Scripts/queries';
import mutations from '../Scripts/mutations';
const resolvers = {
   Query: {
        allUsers: async () => {
            try {
                const result = await queries.allUsers();
                if (!result.success) {
                    throw new Error('Error al extraer la data');
                } else {
                    return result.data; // Cambia aquí
                }
            } catch (err) {
                console.error(err);
                return { error: err }; // También puedes devolver solo el mensaje del error
            }
        }
    },
    Mutation:{
        createUser: async (_:any,args:{name:string,last_name:string,age:number,country:string})=>{
            return await mutations.createUser(_,args);
        }
    }
};

export default resolvers;
