# Think Driven Web Application

This is a full-stack web application that combines user authentication with a comprehensive mental health and psychology platform.

## Features

### Frontend
- **User Authentication**: Login and signup functionality
- **Responsive Design**: Modern UI with Bootstrap components
- **Navigation**: Navigation bar with authenticated routes
- **Home Page**: Welcome section, products display, and Think Driven content
- **Additional Pages**: Blogs, YouTube, and Team pages
- **Components**: 
  - Header with video background
  - Ad body section
  - Carousel cards for articles
  - FAQ section
  - Review form section
  - Footer with social links

### Backend
- **User Management**: JWT-based authentication
- **Product API**: RESTful endpoints for products
- **Database**: MongoDB with Mongoose ODM
- **Security**: Protected routes with middleware

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Signup-loginn
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=8080
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

## Usage

1. **Access the application**: Open `http://localhost:3000` in your browser
2. **Sign up**: Create a new account or use existing credentials
3. **Login**: Authenticate with your credentials
4. **Navigate**: Use the navigation bar to explore different sections
5. **View Products**: See the integrated products from the backend
6. **Explore Content**: Browse blogs, YouTube content, and team information

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── assets/             # Images and static assets
│   └── App.js             # Main application component
├── public/                 # Public assets and HTML
└── package.json           # Frontend dependencies

backend/
├── Controllers/            # Request handlers
├── Models/                 # Database models
├── Routes/                 # API route definitions
├── Middlewares/           # Authentication and validation
└── index.js               # Server entry point
```

## API Endpoints

- `POST /auth/signup` - User registration
- `POST /auth/login` - User authentication
- `GET /products` - Get all products (authenticated)
- `POST /products` - Create new product (authenticated)

## Technologies Used

- **Frontend**: React, Bootstrap, React Bootstrap
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS3, Bootstrap 5

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
