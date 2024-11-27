import express from "express"; // Import the express module
import userRoutes from "./routes/user"; // Import the user routes from the user file

// Create an instance of the express application
const app = express();

// Middleware to parse incoming JSON requests and place the resulting data in req.body
app.use(express.json());

// Use the userRoutes for any request that starts with '/api/users'
app.use("/api/users", userRoutes);

// Export the app instance to be used elsewhere (e.g., in the server file)
export default app;
