export default {
  roots: ["<rootDir>/src"], // Set the root directory for the project files (where the source code is located)
  preset: "ts-jest", // Use ts-jest preset for testing TypeScript code
  testEnvironment: "node", // Set the testing environment to Node.js
  moduleFileExtensions: ["ts", "js"], // Specify the file extensions that Jest should recognize
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest to transform TypeScript files (.ts and .tsx) into JavaScript for testing
  },
  testMatch: ["**/test/**/*.test.ts"], // Specify the pattern to match test files (in this case, files inside a "test" folder)
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1", // Map imports starting with "src/" to the correct location in the "src" folder
  },
  extensionsToTreatAsEsm: [".ts"], // Treat .ts files as ESM (ECMAScript Modules) for proper module resolution
};
