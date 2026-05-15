# Employee Management System - Frontend

This is the frontend application for the Employee Management System, built with modern web technologies to provide a responsive and user-friendly interface for managing employees.

## 🚀 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand
- **Routing:** React Router
- **Form Handling:** React Hook Form
- **HTTP Client:** Axios

## 📦 Installation & Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   If your backend is running on a specific URL (other than the default), you may need to configure the API base URL. Check the source code (e.g., Axios setup) for any required `.env` variables like `VITE_API_URL`.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will start on a local development server, usually `http://localhost:5173`.

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 📂 Project Structure

- `src/`: Contains the main source code.
  - `components/`: Reusable React components (CreateEmp, EditEmployee, ListOfEmp, etc.).
  - `assets/`: Static assets like images.
- `public/`: Publicly accessible static files.
