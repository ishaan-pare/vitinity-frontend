import React, { useState, useContext, useRef, useEffect } from "react";
import AuthService from '../../services/AuthService';
import Message from '../Message/Message';
import { useNavigate } from "react-router";
import { AuthContext } from '../../context/AuthContext';
import "./register.css";

const Register = (props) => {
    const [user, setUser] = useState({ username: "", regId: "", password: "" });
    const [myuser, setMyuser] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const [code, setCode] = useState(0);
    let timerId = useRef(null);

    useEffect(()=>{
        AuthService.getAllAuthUsers()
                    .then(data=>{
                        setMyuser(data);
                    })

                    console.log(myuser);
    })

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

        //change regid->username and username->regid for login via regid
        if (user["password"].length < 8) {
            setMessage("Password is too short");
            setTimeout(()=>{
                setMessage("");
            },2000);
        }
        else
            AuthService.register(user)
            .then(data => {

                const { message } = data;
                resetForm();

                if (!message.msgError) {
                    setCode(1);
                    setMessage(message.msgBody);
                    timerId = setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
                else {
                    setCode(0);
                    setMessage(message.msgBody);
                    timerId = setTimeout(() => {
                        navigate('/aboutus');
                    }, 2000);
                }
            });
    }

    return (
        <div className="register-block">
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                {/* convert regid->username and username->regid for login via regid */}
                <input type="text" onChange={onChange} name="regId" placeholder="Enter registerId"/>
                <input type="text" onChange={onChange} name="username" placeholder="Enter username"/>
                <input type="password" onChange={onChange} name="password" placeholder="Enter password"/>
                <button onSubmit={onSubmit}>Register</button>
                <div className="bottom">
                    <a href="/login">already have an account? <span>login here</span></a>
                </div>
            </form>
            <Message text={message} msgcode={code}/>
        </div>
    )
}

export default Register;