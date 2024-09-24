

  # API SIMPLE CON GRAPHQL Y APOLLO-SERVER
Este proyecto es una API sencilla que permite crear, leer, actualizar y eliminar información de usuarios (operaciones CRUD). Está construida usando Node.js y TypeScript. GraphQL para manejar las solicitudes y respuestas de datos. Para gestionar las consultas y cambios en los datos, emplea Apollo Server.

La API se conecta a una base de datos SQLite utilizando Prisma, lo que facilita el trabajo con la base de datos. Además, el proyecto está preparado para ejecutarse dentro de Docker, lo que hace que sea fácil de instalar y ejecutar en diferentes computadoras o servidores.


## Instalación

1. Ingresar al repositorio en GitHub:
   [https://github.com/kevinmartinez02/Prueba_Graphql](https://github.com/kevinmartinez02/Prueba_Graphql)

2. Crear una carpeta donde deseas clonar el proyecto.

3. Abrir una terminal en esa carpeta e ingresar el siguiente comando:
   ```bash
   git clone https://github.com/kevinmartinez02/Prueba_Graphql.git
   

## Crear y ejecutar el Contenedor Docker

1. Ingresar a la carpeta raíz `/Servidor`:
   ```bash
   cd Servidor
2. Ejecutar el Comando :
   ```bash
   docker-compose up --build
3. Verificar que el contenedor esté en ejecución:
   ```bash
   docker ps



## Acceder a la API

1. Una vez que el contenedor esté en ejecución, puedes acceder al sandbox de Apollo Server en tu navegador web:
   [http://localhost:4000](http://localhost:4000)

2. Aquí podrás realizar consultas utilizando la interfaz que proporciona Apollo Server.




## Consultas y Mutaciones

1.Obtener todos los usuarios
    
    ```bash
        query{
            allUsers{
                id,
                name,
                last_name,
                age,
                country
            }
        }

2. buscar un usuario
    ```bash
        query{
            findUser(id:2){
                id,
                name,
                last_name,
                age,
                country
            }
        }


3. Crear un usuario: retorna los campos de la informacion del nuevo Usuario

      ```bash
        mutation{
            createUser(name:"Juan",last_name:"Ramirez",age:15,country:"Guatemala"){
                id,
                name,
                last_name,
                age,
            }
        }
 4.  actualizar un usuario: retorna los campos del usuario editado con la nueva informacion
      ```bash
        mutation{
            updateUser(id:2,name:"Juan",last_name:"Ramirez",age:15,country:"Guatemala"){
                name,
                country
            }
        }

5.  Eliminar un usuario : retorna los campos del usuario de eliminado
     ```bash
        mutation{
            deleteUser(id:1){
                name
            }
        }


## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **TypeScript**: Superconjunto de JavaScript que añade tipos estáticos.
- **GraphQL**: Lenguaje de consulta para APIs.
- **Apollo Server**: Herramienta para implementar GraphQL en el backend.
- **SQLite**: Base de datos ligera y fácil de usar.
- **Prisma**: ORM que facilita las consultas a la base de datos.
- **Docker**: Plataforma para crear y ejecutar contenedores.
