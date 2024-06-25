# Node.js MVC Application

This is a Node.js application built using the MVC (Model-View-Controller) architecture. The application uses Express for the server, Mongoose for MongoDB interaction, and dotenv for environment variable management.

Note: This is basic Backend Setup, it is not complete and requires more functionalities, routes, schemas,etc.

## Features

- MVC architecture for clear separation of concerns
- User management with CRUD operations
- Environment variable management with dotenv
- Input validation with Joi
- Bundling with Webpack


## Prerequisites

- Node.js
- MongoDB

## Getting Started

### Installation

1. Clone the repository

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI and port

### Build and Run

1. Build the application with Webpack:

    ```bash
    npm run build
    ```

2. Start the server:

    ```bash
    npm start
    ```

### Usage

Now we can make APIs according to our needs:

- `GET /worko/users` - Retrieve all users
- `GET /worko/users/:id` - Retrieve a user by ID
- `POST /worko/users` - Create a new user
- `PUT /worko/users/:id` - Update a user by ID
- `DELETE /worko/users/:id` - Delete a user by ID

