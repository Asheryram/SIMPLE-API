## User Management API
This code snippet represents a Node.js-based API for user management. It includes various endpoints for managing user data such as adding, retrieving, updating, and removing users. The API uses the Express.js framework for handling HTTP requests and http-status-codes for consistent HTTP status code handling.

Endpoints:
Add User

Route: POST /add
Description: Adds a new user to the system. Requires a user object in the request body. If the "name" field is missing, it returns a "BAD_REQUEST" status.
Get All Users

Route: GET /all
Description: Retrieves a list of all users. If there are no users, it returns a "NOT_FOUND" status.
Get User by ID

Route: GET /user/:id
Description: Retrieves a user by their ID. If the user is not found, it returns a "NOT_FOUND" status.
Update User by ID

Route: PUT /user/:id
Description: Updates a user by their ID. Requires a user object in the request body. If the user is not found, it returns a "NOT_FOUND" status.
Remove User by ID

Route: DELETE /user/:id
Description: Removes a user by their ID. If the user is successfully removed, it returns a "SUCCESS" status; otherwise, it returns a "FAILURE" status.
Usage
To use this API, make HTTP requests to the respective endpoints as described above. Ensure you have the required dependencies installed and properly configured.

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

### Installation

To install the project's dependencies, run the following command:

```bash
npm install

Getting Started
Clone this repository.
Install the necessary dependencies using npm install.
Start the server using node server.js.
