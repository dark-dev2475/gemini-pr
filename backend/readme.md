# Gemini-PR Backend API

This backend provides RESTful APIs for user authentication, project management, and user-project collaboration.

## Base URL
# Gemini-PR Backend API

This backend provides RESTful APIs for user authentication, project management, and user-project collaboration.

## Base URL

```
http://localhost:3000/
```

---

## User Routes

### Register a New User

- **POST** `/users/register`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password must be at least 6 characters.

---

### Login

- **POST** `/users/login`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password cannot be empty.

---

### Get Profile (Authenticated)

- **GET** `/users/profile`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Logout (Authenticated)

- **GET** `/users/logout`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Get All Users (Authenticated)

- **GET** `/users/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

## Project Routes

### Create Project (Authenticated)

- **POST** `/projects/create`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "name": "Project Name"
  }
  ```
- **Validation:**  
  - Name is required and must be a string.

---

### Get All Projects for User (Authenticated)

- **GET** `/projects/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`

---

### Add Users to Project (Authenticated)

- **PUT** `/projects/add-user`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "projectId": "projectObjectId",
    "users": ["userObjectId1", "userObjectId2"]
  }
  ```
- **Validation:**  
  - `projectId` is required and must be a string.
  - `users` must be a non-empty array of strings (user IDs).

---

## Authentication

All protected routes require a valid JWT token in the `Authorization` header or as a cookie named `token`.

---

## Error Handling

- All endpoints return appropriate HTTP status codes and error messages for validation, authentication, and server errors.

---

## Notes

- All user and project IDs are MongoDB ObjectIds.
- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- Redis is used for token blacklisting on logout.

---

## Environment Variables

Set these in your `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gemini-pr
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

---

## License

MIT# Gemini-PR Backend API

This backend provides RESTful APIs for user authentication, project management, and user-project collaboration.

## Base URL

```
http://localhost:3000/
```

---

## User Routes

### Register a New User

- **POST** `/users/register`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password must be at least 6 characters.

---

### Login

- **POST** `/users/login`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password cannot be empty.

---

### Get Profile (Authenticated)

- **GET** `/users/profile`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Logout (Authenticated)

- **GET** `/users/logout`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Get All Users (Authenticated)

- **GET** `/users/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

## Project Routes

### Create Project (Authenticated)

- **POST** `/projects/create`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "name": "Project Name"
  }
  ```
- **Validation:**  
  - Name is required and must be a string.

---

### Get All Projects for User (Authenticated)

- **GET** `/projects/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`

---

### Add Users to Project (Authenticated)

- **PUT** `/projects/add-user`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "projectId": "projectObjectId",
    "users": ["userObjectId1", "userObjectId2"]
  }
  ```
- **Validation:**  
  - `projectId` is required and must be a string.
  - `users` must be a non-empty array of strings (user IDs).

---

## Authentication

All protected routes require a valid JWT token in the `Authorization` header or as a cookie named `token`.

---

## Error Handling

- All endpoints return appropriate HTTP status codes and error messages for validation, authentication, and server errors.

---

## Notes

- All user and project IDs are MongoDB ObjectIds.
- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- Redis is used for token blacklisting on logout.

---

## Environment Variables

Set these in your `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gemini-pr
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

---

## License

MIT# Gemini-PR Backend API

This backend provides RESTful APIs for user authentication, project management, and user-project collaboration.

## Base URL

```
http://localhost:3000/
```

---

## User Routes

### Register a New User

- **POST** `/users/register`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password must be at least 6 characters.

---

### Login

- **POST** `/users/login`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password cannot be empty.

---

### Get Profile (Authenticated)

- **GET** `/users/profile`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Logout (Authenticated)

- **GET** `/users/logout`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Get All Users (Authenticated)

- **GET** `/users/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

## Project Routes

### Create Project (Authenticated)

- **POST** `/projects/create`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "name": "Project Name"
  }
  ```
- **Validation:**  
  - Name is required and must be a string.

---

### Get All Projects for User (Authenticated)

- **GET** `/projects/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`

---

### Add Users to Project (Authenticated)

- **PUT** `/projects/add-user`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "projectId": "projectObjectId",
    "users": ["userObjectId1", "userObjectId2"]
  }
  ```
- **Validation:**  
  - `projectId` is required and must be a string.
  - `users` must be a non-empty array of strings (user IDs).

---

## Authentication

All protected routes require a valid JWT token in the `Authorization` header or as a cookie named `token`.

---

## Error Handling

- All endpoints return appropriate HTTP status codes and error messages for validation, authentication, and server errors.

---

## Notes

- All user and project IDs are MongoDB ObjectIds.
- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- Redis is used for token blacklisting on logout.

---

## Environment Variables

Set these in your `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gemini-pr
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

---

## License

MIT# Gemini-PR Backend API

This backend provides RESTful APIs for user authentication, project management, and user-project collaboration.

## Base URL

```
http://localhost:3000/
```

---

## User Routes

### Register a New User

- **POST** `/users/register`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password must be at least 6 characters.

---

### Login

- **POST** `/users/login`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password cannot be empty.

---

### Get Profile (Authenticated)

- **GET** `/users/profile`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Logout (Authenticated)

- **GET** `/users/logout`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Get All Users (Authenticated)

- **GET** `/users/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

## Project Routes

### Create Project (Authenticated)

- **POST** `/projects/create`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "name": "Project Name"
  }
  ```
- **Validation:**  
  - Name is required and must be a string.

---

### Get All Projects for User (Authenticated)

- **GET** `/projects/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`

---

### Add Users to Project (Authenticated)

- **PUT** `/projects/add-user`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "projectId": "projectObjectId",
    "users": ["userObjectId1", "userObjectId2"]
  }
  ```
- **Validation:**  
  - `projectId` is required and must be a string.
  - `users` must be a non-empty array of strings (user IDs).

---

## Authentication

All protected routes require a valid JWT token in the `Authorization` header or as a cookie named `token`.

---

## Error Handling

- All endpoints return appropriate HTTP status codes and error messages for validation, authentication, and server errors.

---

## Notes

- All user and project IDs are MongoDB ObjectIds.
- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- Redis is used for token blacklisting on logout.

---

## Environment Variables

Set these in your `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gemini-pr
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

---

## License

MIT
```
http://localhost:3000/
```

---

## User Routes

### Register a New User

- **POST** `/users/register`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password must be at least 6 characters.

---

### Login

- **POST** `/users/login`
- **Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Validation:**  
  - Email must be valid.
  - Password cannot be empty.

---

### Get Profile (Authenticated)

- **GET** `/users/profile`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Logout (Authenticated)

- **GET** `/users/logout`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

### Get All Users (Authenticated)

- **GET** `/users/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`  
  or  
  - Cookie: `token=<JWT_TOKEN>`

---

## Project Routes

### Create Project (Authenticated)

- **POST** `/projects/create`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "name": "Project Name"
  }
  ```
- **Validation:**  
  - Name is required and must be a string.

---

### Get All Projects for User (Authenticated)

- **GET** `/projects/all`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`

---

### Add Users to Project (Authenticated)

- **PUT** `/projects/add-user`
- **Headers:**  
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
  ```json
  {
    "projectId": "projectObjectId",
    "users": ["userObjectId1", "userObjectId2"]
  }
  ```
- **Validation:**  
  - `projectId` is required and must be a string.
  - `users` must be a non-empty array of strings (user IDs).

---

## Authentication

All protected routes require a valid JWT token in the `Authorization` header or as a cookie named `token`.

---

## Error Handling

- All endpoints return appropriate HTTP status codes and error messages for validation, authentication, and server errors.

---

## Notes

- All user and project IDs are MongoDB ObjectIds.
- Passwords are hashed before storage.
- JWT tokens are used for authentication.
- Redis is used for token blacklisting on logout.

---

## Environment Variables

Set these in your `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/gemini-pr
JWT_SECRET=your_jwt_secret
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

---

## License

MIT