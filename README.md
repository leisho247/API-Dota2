
# DOTA 2 Heroes API

Una API para gestionar Heroes , incluyendo autenticacion de usuarios y clasificacion en fuerza , Agilidad, e Inteligencia.

## tabla de Contenidos

- [Caracteristicas] (#Caracteristicas)
- [Tecnologias-Utilizadas] (#Tecnologias-Utilizadas)
- [Requisitos-Previos] (#Requisitos-Previos)
- [Endpoints] (#Endpoints)

## Caracteristicas

- Regsitro e inicio de sesion de usuarios.
- Creacion, lectura, actualizacion, y eliminacion de heroes.
- Clasificaion de heroes en Fuerza, Agilidad e Inteligencia.
- Autentificacion con JSON Web Tokens (JWT).

## Tecnologias-Utilizadas

- Node.js
- Express
- express-validator
- Prisma ORM
- PostgreSQL
- JWT (Jsonwebtoken)
- bcrypt
- join (validacion)
- dotenv (gestion de variables de entorno)
- cors (gestion de CORS)

## Requisitos-Previos

- Node.js
- PostgreSQL

## Endpoints

Autenticacion

- Regsitro: `POST /auth/regsiter`
- Login: `POST /auth/login`

Usuarios

- Obtener todos los usuarios: `GET /users`
- Obtener un usuario por ID:`GET /users/:id`
- Obtener heroes de un usuario: `GET /users/:id/heroes`

Heroes

- Crear un heroe: `POST /heroes`
- Obtener todos los heroes: `GET /heroes`
- Obtener un heroe por ID: `GET /heroes/:id`
- Actualizar un heroe: `PUT /heroes/:id`
- Eliminar un heroe: `DELETE / heroes/:id`

Category

- crea la categoria: `POST /categories`
- obtiene todas la categorias: `GET /categories`
- Obtiene una categoria por ID: `GET/ categories/:id`
- Actualiza una categoria: `PUT / categories/:id`
- Elimina una categoria: `DELETE /categories/:id`

## Modelo de datos

#### Tablas en postgreSQL

#### Usuario

| campo         | Tipo     | Description                    |
| :------------ | :------- | :----------------------------- |
| id            | int      | Identificador unico de usuario |
| email         | String   | Correo electronico de usuario  |
| name          | String   | Nombre del usuario             |
| password      | String   | Contraseña de usuario          |
| refreshTokens | String[] | Tokens de refresco del usuario |
| Heroes        | Hero[]   | Heroes asociados al usuario    |

#### Heroes

| campo    | Tipo   | Description                       |
| :------- | :----- | :-------------------------------- |
| id       | int    | Identificador del unico Heroe     |
| name     | String | Nombre del Heroe                  |
| role     | String | Rol del Heroe                     |
| abilites | String | Habilidades del heroe             |
| userId   | int    | Identificador de usuario asociado |
| user     | User   | Usuario asociados al Heroe        |

#### Category

| campo  | Tipo    | Description                             |
| :----- | :------ | :-------------------------------------- |
| id     | int     | Identificador del unico de la Categoria |
| name   | String  | Nombre de la categoria                  |
| heroes | Hero [] | heroes asociados a la categoria         |

### Metodo de uso en Postman

#### Register User

- **URL:**`POST /auth/register`
- **Hreaders:**`Content-Type: aplication/json`
- **Body `JSON`**

```json
{
  "email": "user@Example.com",
  "name": "User Name",
  "password": "password123"
}
```

### Login User

- URL: POST /auth/login
- Headers: Content-Type: application/json
- Body (JSON):
- json

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response (Success):
json

{
  "token": "jwt.token.here"
}

```

#### Hero Routes

Create Hero

URL: POST /heroes
Headers:
Content-Type: application/json
Authorization: Bearer <token>
Body (JSON):

```json
{
  "name": "Hero Name",
  "role": "Hero Role",
  "abilities": "Ability1, Ability2, Ability3",
  "userId": 1
}
```

#### Crear hero con categoria

URL: POST /heroes
Headers:
Content-Type: application/json
Authorization: Bearer <token>
Body (JSON):

```json
{
  "name": "Hero Name",
  "role": "Hero Role",
  "abilities": "Ability1, Ability2, Ability3",
  "userId": 1,
  "categoryId": 2
}
```

#### Response (Success):

```json
{
  "id": 1,
  "name": "Hero Name",
  "role": "Hero Role",
  "abilities": "Ability1, Ability2, Ability3",
  "categoryId": 1
}
```

#### Get All Heroes

URL: GET /heroes
Headers:
Authorization: Bearer <token>

Response (Success):

```json
[
  {
    "id": 1,
    "name": "Hero Name",
    "role": "Hero Role",
    "abilities": "Ability1, Ability2, Ability3",
    "categoryId": 1
  }
]
```

#### User Routes

Create User
URL: POST /users
Headers:
Content-Type: application/json
Authorization: Bearer <token>
Body (JSON):

```json
{
  "email": "newuser@example.com",
  "name": "New User",
  "password": "newpassword"
}
```

Response (Success):

```json
{
  "id": 1,
  "email": "newuser@example.com",
  "name": "New User",
  "password": "$2b$10$...",
  "refreshTokens": []
}
```

#### Get User by ID

URL: GET /users/:id
Headers:
Authorization: Bearer <token>
Path Params:
id: The ID of the user to retrieve.

Response (Success):

```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "User Name",
  "password": "$2b$10$...",
  "refreshTokens": []
}
```

#### Autor

- Creado po Leonardo Herrera.
