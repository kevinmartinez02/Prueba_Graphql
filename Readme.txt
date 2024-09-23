
##-----------------------------------------------------------------------------------------------------------------##
                         API SIMPLE CON GRAPHQL Y APOLLO-SERVER
Este proyecto es una API sencilla que permite crear, leer, actualizar y eliminar información de usuarios (operaciones CRUD). Está construida usando Node.js y TypeScript. Utiliza Express y GraphQL para manejar las solicitudes y respuestas de datos. Para gestionar las consultas y cambios en los datos, emplea Apollo Server.

La API se conecta a una base de datos SQLite utilizando Prisma, lo que facilita el trabajo con la base de datos. Además, el proyecto está preparado para ejecutarse dentro de Docker, lo que hace que sea fácil de instalar y ejecutar en diferentes computadoras o servidores.

##-----------------------------------------------------------------------------------------------------------------##
# Instalacion 

 -- Ingresar al Repositorio en git Hub:
        https://github.com/kevinmartinez02/Prueba_Graphql

 -- crear un carpeta donde quiere clonar el Proyecto 

 -- abrir una terminal en esa carpeta e ingresar el siguiente Codigo: 
        git clone https://github.com/kevinmartinez02/Prueba_Graphql.git


##-----------------------------------------------------------------------------------------------------------------##
# Crear y ejecutar el Contenedor Docker
  -- Ingresar a la Carpeta Raiz /Servidor :
        cd Servidor

  -- Ejecutar el Siguietne comando: 
        docker-compose up --build

  -- Verifica que el contenedor esté en ejecución:
        docker ps


##-----------------------------------------------------------------------------------------------------------------##
# Acceder a la API
 -- Una vez que el contenedor esté en ejecución, puedes acceder al sandbox de Apollo Server en tu navegador web:
        http://localhost:4000
    - aqui se podra realizar consultas con la interfaz que proporciona Apollo Server

##-----------------------------------------------------------------------------------------------------------------##


##-----------------------------------------------------------------------------------------------------------------##
## Consultas y Mutaciones
 -- Obtener todos los usuarios
        query{
            allUsers{
                id,
                name,
                last_name,
                age,
                country
            }
        }
 -- buscar un usuario
        query{
            findUser(id:2){
                id,
                name,
                last_name,
                age,
                country
            }
        }

-- Crear un usuario: retorna los campos de la informacion del nuevo Usuario
        mutation{
            createUser(name:"Juan",last_name:"Ramirez",age:15,country:"Guatemala"){
                id,
                name,
                last_name,
                age,
            }
        }
-- actualizar un usuario: retorna los campos del usuario editado con la nueva informacion
        mutation{
            updateUser(id:2,name:"Juan",last_name:"Ramirez",age:15,country:"Guatemala"){
                name,
                country
            }
        }
-- Eliminar un usuario : retorna los campos del usuario de eliminado
        mutation{
            deleteUser(id:1){
                name
            }
        }

##-----------------------------------------------------------------------------------------------------------------##
-- Tecnologías utilizadas
        Node.js: Entorno de ejecución para JavaScript.
        TypeScript: Superconjunto de JavaScript que añade tipos estáticos.
        GraphQL: Lenguaje de consulta para APIs.
        Apollo Server: Herramienta para implementar GraphQL en el backend.
        SQLite: Base de datos ligera y fácil de usar.
        Prisma: ORM que facilita las consultas a la base de datos.
        Docker: Plataforma para crear y ejecutar contenedores.