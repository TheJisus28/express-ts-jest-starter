import dotenv from "dotenv"; // Import the dotenv library to load environment variables from a .env file

dotenv.config(); // Call the config method to load variables from the .env file into process.env

export const { PORT } = process.env; // Destructure and export the PORT variable from process.env
