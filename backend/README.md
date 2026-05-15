# Employee Management System - Backend

This is the backend service for the Employee Management System, providing a RESTful API to manage employee records, authenticate users, and interact with the database.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs for password hashing
- **Middleware:** CORS, Cookie Parser

## 📦 Installation & Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root of the `backend` directory and add the necessary environment variables. Example:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will typically run on `http://localhost:5000` (or the port specified in your `.env` file).

## 📂 Project Structure

- `server.js`: Entry point of the application.
- `APIs/`: Contains route handlers and controller logic.
- `models/`: Mongoose database schemas.

## 📜 Available Scripts

- `npm start`: Starts the Node.js server.
