import React, { useState, useContext, useRef } from "react";
import AuthService from '../services/AuthService';
import Message from './Message';
import { useNavigate } from "react-router";
import { AuthContext } from '../context/AuthContext';
import "./css/register.css";

const Register = (props) => {
    const [user, setUser] = useState({ username: "", regId: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    let timerId = useRef(null);


    const navigate = useNavigate();
    const onChange = e => {
        e.preventDefault();

        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }
    const resetForm = () => {
        setUser({ username: "", regId: "", password: "" })
    }
    const onSubmit = e => {
        e.preventDefault();

        AuthService.register(user)
            .then(data => {

                const { message } = data;
                setMessage(message);

                resetForm();

                if (!message.msgError) {
                    timerId = setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
            });
    }

    return (
        <div className="register-block">
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} name="regId" placeholder="Enter registerId"/>
                <input type="text" onChange={onChange} name="username" placeholder="Enter username"/>
                <input type="password" onChange={onChange} name="password" placeholder="Enter password"/>
                <button onSubmit={onSubmit}>Register</button>
            </form>
        </div>
    )
}

export default Register;