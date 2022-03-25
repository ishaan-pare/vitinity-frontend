import React, { useState, useContext } from "react";
import AuthService from '../services/AuthService';
import Message from './Message';
import { useNavigate } from "react-router";
import { AuthContext } from '../context/AuthContext';
import "./css/login.css";

const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const navigate = useNavigate();
    const onChange = e => {
        e.preventDefault();

        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();

        AuthService.login(user)
            .then(data => {

                const { isAuthenticated, user, message } = data;

                if (isAuthenticated) {
                    console.log(user);

                    authContext.setUser(user);
                    authContext.setIsAuthenticated(isAuthenticated);
                    navigate('/explore');

                }
                else {
                    setMessage(message);

                }
            });
    }

    return (
        <div className="login-block">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} name="username" placeholder="Enter username"/>
                <input type="password" onChange={onChange} name="password" placeholder="Enter password"/>
                <button onSubmit={onSubmit}>Login</button>
            </form>
        </div>

    )
}

export default Login;