import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import RefrshHandler from './RefrshHandler';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import YouTubePage from './pages/youtube';
import TeamPage from './pages/team';
import BlogPage from './pages/blogs';
import TestPage from './pages/TestPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on component mount
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('loggedInUser');
    if (token && user) {
      setIsAuthenticated(true);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('loggedInUser');
    return (token && user) ? element : <Navigate to="/login" />;
  }

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated && <NavbarComponent setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/youtube' element={<PrivateRoute element={<YouTubePage />} />} />
        <Route path='/blogs' element={<PrivateRoute element={<BlogPage />} />} />
        <Route path='/team' element={<PrivateRoute element={<TeamPage />} />} />
        <Route path='/test' element={<PrivateRoute element={<TestPage />} />} />
      </Routes>
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;