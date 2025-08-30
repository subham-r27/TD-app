# Startup Guide - Think Driven Web Application

## Quick Start

This guide will help you get the integrated Think Driven web application running on your local machine.

## Prerequisites

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
3. **Git** (optional, for cloning)

## Step 1: Database Setup

1. **Install MongoDB** on your system
2. **Start MongoDB service**:
   - Windows: MongoDB should run as a service
   - macOS: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

3. **Verify MongoDB is running**:
   ```bash
   mongosh
   # or
   mongo
   ```

## Step 2: Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file** (optional):
   Create a `.env` file in the backend directory:
   ```
   MONGO_CONN=mongodb://localhost:27017/thinkdriven
   JWT_SECRET=your_secret_key_here
   PORT=8080
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```

5. **Verify backend is running**:
   - Check console for "MongoDB Connected" message
   - Server should be running on port 8080
   - Test endpoint: `http://localhost:8080/ping` should return "PONG"

## Step 3: Frontend Setup

1. **Open a new terminal** and navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend development server**:
   ```bash
   npm start
   ```

4. **Verify frontend is running**:
   - Browser should open to `http://localhost:3000`
   - You should see the login page

## Step 4: Testing the Application

1. **Create a new account**:
   - Click "Sign Up" on the login page
   - Fill in your details and create an account

2. **Login** with your credentials

3. **Explore the application**:
   - **Home**: Welcome message, products from backend, and Think Driven content
   - **Blogs**: Blog articles and stories
   - **YouTube**: Video gallery and playlist links
   - **Team**: Team member information
   - **Test**: Component testing page

4. **Check backend integration**:
   - Products should be displayed on the home page
   - Data should come from the MongoDB database
   - Authentication should work properly

## Troubleshooting

### Backend Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running
   - Check if port 27017 is available
   - Verify MongoDB installation

2. **Port Already in Use**:
   - Change PORT in .env file
   - Kill process using the port: `npx kill-port 8080`

3. **Dependencies Error**:
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

### Frontend Issues

1. **Component Not Loading**:
   - Check browser console for errors
   - Verify all CSS files are present
   - Check import statements

2. **Styling Issues**:
   - Ensure Bootstrap CSS is loaded
   - Check if custom CSS files are accessible

3. **API Connection Error**:
   - Verify backend is running on port 8080
   - Check CORS settings
   - Verify authentication token

### Common Solutions

1. **Clear browser cache** and reload
2. **Restart both servers** (backend and frontend)
3. **Check terminal output** for error messages
4. **Verify file paths** and imports

## File Structure

```
Signup-loginn/
├── backend/                 # Backend server
│   ├── Controllers/        # Request handlers
│   ├── Models/            # Database models
│   ├── Routes/            # API routes
│   ├── Middlewares/       # Authentication
│   └── index.js           # Server entry
├── frontend/               # React application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── assets/        # Images and files
│   └── public/            # Static assets
└── README.md              # Project documentation
```

## Next Steps

1. **Customize content** in the components
2. **Add more products** through the backend API
3. **Modify styling** in CSS files
4. **Add new features** as needed

## Support

If you encounter issues:
1. Check the console output
2. Verify all prerequisites are met
3. Ensure file paths are correct
4. Check network connectivity

The application should now be fully integrated and running with both frontend and backend working together!

