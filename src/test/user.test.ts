import request from "supertest";
import app from "../app";

// Test suite for the Users API
describe("Users API", () => {
  // Test for the GET /api/users endpoint
  test("GET /api/users - Should return all users", async () => {
    // Make a GET request to fetch users
    const response = await request(app).get("/api/users");

    // Check if the status code is 200 (OK)
    expect(response.status).toBe(200);

    // Check if the number of users returned is correct (2 users in the initial setup)
    expect(response.body.length).toBe(2);
  });

  // Test for the POST /api/users endpoint
  test("POST /api/users - Should create a new user", async () => {
    // Data for the new user to be created
    const newUser = { name: "Alice Johnson" };

    // Make a POST request to create a new user
    const response = await request(app).post("/api/users").send(newUser);

    // Check if the status code is 201 (Created)
    expect(response.status).toBe(201);

    // Check if the response body contains the correct user name
    expect(response.body.name).toBe(newUser.name);
  });

  // Test for the PUT /api/users/:id endpoint
  test("PUT /api/users/:id - Should update a user", async () => {
    // Data to update the user's name
    const updatedUser = { name: "Updated Name" };

    // Make a PUT request to update the user with ID 1
    const response = await request(app).put("/api/users/1").send(updatedUser);

    // Check if the status code is 200 (OK)
    expect(response.status).toBe(200);

    // Check if the updated name is correctly returned
    expect(response.body.name).toBe(updatedUser.name);
  });

  // Test for the DELETE /api/users/:id endpoint
  test("DELETE /api/users/:id - Should delete a user", async () => {
    // Make a DELETE request to delete the user with ID 1
    const response = await request(app).delete("/api/users/1");

    // Check if the status code is 204 (No Content), indicating successful deletion
    expect(response.status).toBe(204);
  });
});
