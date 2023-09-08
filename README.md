# User Management API

This Node.js application provides a simple User Management API with CRUD (Create, Read, Update, Delete) operations. It uses the Express.js framework for building the API and the HTTP Status Codes module for status code constants.

## Endpoints

### 1. Add User

- **Endpoint**: `POST /api/users`
- **Description**: Adds a new user to the system.
- **Request Body**: JSON object containing user data.
- **Response**: Returns the newly added user if successful, or an error message if the request is invalid.

### 2. Get All Users

- **Endpoint**: `GET /api/users`
- **Description**: Retrieves a list of all users.
- **Response**: Returns a list of users if there are any, or an error message if there are no users.

### 3. Get User by ID

- **Endpoint**: `GET /api/users/:id`
- **Description**: Retrieves a user by their ID.
- **Response**: Returns the user if found, or an error message if the user does not exist.

### 4. Update User

- **Endpoint**: `PUT /api/users/:id`
- **Description**: Updates a user's information by their ID.
- **Request Body**: JSON object containing user data to update.
- **Response**: Returns the updated user if successful, or an error message if the user is not found.

### 5. Remove User

- **Endpoint**: `DELETE /api/users/:id`
- **Description**: Deletes a user by their ID.
- **Response**: Returns a success message if the user is deleted, or an error message if the user is not found.

## Status Codes

- `200 OK`: Successful request.
- `201 Created`: User successfully added.
- `400 Bad Request`: Invalid request.
- `404 Not Found`: User or resource not found.

## Usage

1. Install Node.js and npm (Node Package Manager) if not already installed.

2. Install project dependencies:

```bash
npm install
```

3. Start the server:

## Dependencies

This project utilizes several dependencies to facilitate the development of a simple API in Node.js. Below is a list of the key dependencies and their purposes:

- **ava**: A test runner for running automated tests.

- **compression**: Middleware for compressing HTTP responses, reducing bandwidth usage.

- **cors**: Middleware for handling Cross-Origin Resource Sharing, enabling controlled access to your API from different domains.

- **express**: A fast and minimalist web framework for Node.js, used for building the API's endpoints and handling HTTP requests.

- **express-rate-limit**: Middleware for rate limiting HTTP requests to protect your API from abuse or heavy traffic.

- **express-yup-middleware**: Middleware for request validation using Yup schemas, ensuring that incoming data conforms to specified rules.

- **helmet**: Middleware for enhancing web security by setting various HTTP headers, providing protection against common web vulnerabilities.

- **http-status-codes**: A library for working with HTTP status codes, making it easier to handle responses with meaningful status codes.

- **yup**: A schema validation library used in conjunction with `express-yup-middleware` to validate incoming data against predefined schemas.

### Summary

**Getting Started**
-Clone this repository.
-Install the necessary dependencies using npm install.
-Start the server using node server.js.
