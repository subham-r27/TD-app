import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './Login.css';

function Login({ setIsAuthenticated }) {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const response = await fetch("http://localhost:8080/auth/login" ,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setIsAuthenticated(true); // Set authentication state
                setTimeout(() => {
                    navigate('/home')
                }, 700)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <div className="login-container">
            <div className="login-background">
                <video autoPlay loop muted className="background-video">
                    <source src="/video/istockphoto-1609837216-640_adpp_is.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
            </div>
            
            <div className="login-content">
                <div className="login-card">
                    <div className="login-header">
                        <img src="/icons/TDLogo.png" alt="Think Driven Logo" className="login-logo" />
                        <h1 className="login-title">Welcome Back</h1>
                        <p className="login-subtitle">Sign in to your Think Driven account</p>
                    </div>
                    
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label htmlFor='email' className="form-label">Email Address</label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter your email...'
                                value={loginInfo.email}
                                className="form-input"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input
                                onChange={handleChange}
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Enter your password...'
                                value={loginInfo.password}
                                className="form-input"
                                required
                            />
                        </div>
                        
                        <button type='submit' className='btn-3d login-button'>
                            Sign In
                        </button>
                        
                        <div className="login-footer">
                            <span className="login-text">
                                Don't have an account?{' '}
                                <Link to="/signup" className="login-link">Sign up</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            
            <ToastContainer />
        </div>
    )
}

export default Login