# Express, TypeScript, Jest & Supertest Setup

This project provides a pre-configured setup for building a REST API with **Express** and **TypeScript**, along with testing capabilities using **Jest** and **Supertest**. It's designed to help you quickly get started with building and testing APIs using modern JavaScript tooling.

## Features

- **Express Setup**: Basic configuration for building APIs with Express.
- **TypeScript Support**: Type safety and modern JavaScript features.
- **Jest Integration**: Testing framework for unit and integration tests.
- **Supertest Integration**: HTTP assertion library for testing REST APIs.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building the API.
- **TypeScript**: Superset of JavaScript for better type safety.
- **Jest**: Testing framework for unit and integration tests.
- **Supertest**: HTTP assertion library for testing REST APIs.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/jest-typescript.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and set up the required environment variables (e.g., `PORT`):

   ```bash
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The server will be running on [http://localhost:3000](http://localhost:3000).

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute the test suite using Jest. The tests are located in the `test` folder.

## Project Structure

The project structure is organized as follows:

```plaintext
express-ts-jest-starter
├── src/
│   ├── app.ts              # Express application setup
│   ├── routes/             # API routes
│   │   └── user.ts         # User routes
│   └── config.ts           # Configuration (e.g., environment variables)
│   ├── test/               # Test folder
│   │   └── user.test.ts    # Tests for user API
├── .env.example            # Example environment variables configuration
├── .nvmrc                  # Node version manager configuration
├── .npmrc                  # npm configuration
├── .gitignore              # Git ignore file
├── README.md               # README file
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest configuration
└── config.ts               # Configuration file
```

## Commands

- `dev`: Starts the application in development mode with TypeScript using `ts-node`.
- `test`: Runs the tests using Jest.

## License

This project is licensed under the ISC License.

## Author

Jesus Daniel Carrascal Hoyos
