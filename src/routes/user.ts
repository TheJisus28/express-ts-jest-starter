import { Router, Request, Response } from "express";

// Create a new router instance
const router = Router();

// Define a User interface with id and name properties
interface User {
  id: number;
  name: string;
}

// In-memory array to store users
let users: User[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Route to get all users
router.get("/", (req: Request, res: Response): void => {
  // Respond with the list of users in JSON format
  res.json(users);
});

// Route to create a new user
router.post("/", (req: Request, res: Response): void => {
  // Extract the name from the request body
  const { name } = req.body as { name: string };

  // If name is not provided, return a 400 error with a message
  if (!name) {
    res.status(400).json({ message: "Name is required" });
    return;
  }

  // Create a new user object with a unique id
  const newUser: User = { id: users.length + 1, name };

  // Add the new user to the users array
  users.push(newUser);

  // Respond with the newly created user and a 201 status
  res.status(201).json(newUser);
});

// Route to update an existing user
router.put("/:id", (req: Request, res: Response): void => {
  // Extract the user id from the request parameters
  const { id } = req.params;

  // Extract the new name from the request body
  const { name } = req.body as { name: string };

  // Find the user by id
  const user = users.find((u) => u.id === parseInt(id, 10));

  // If user is not found, return a 404 error with a message
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  // Update the user's name
  user.name = name;

  // Respond with the updated user
  res.json(user);
});

// Route to delete a user
router.delete("/:id", (req: Request, res: Response): void => {
  // Extract the user id from the request parameters
  const { id } = req.params;

  // Filter out the user with the given id from the users array
  users = users.filter((u) => u.id !== parseInt(id, 10));

  // Respond with a 204 status (no content) to indicate successful deletion
  res.status(204).send();
});

// Export the router to be used in other parts of the application
export default router;
