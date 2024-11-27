import app from "./app"; // Import the Express app instance from the app file
import { PORT } from "../config"; // Import the PORT variable from the configuration file

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
  // Log a message indicating that the server is running and the URL where it's accessible
  console.log(`Server is running on http://localhost:${PORT}`);
});
