import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router";
import './navbar.css';

const Navbar = (props) => {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            console.log(data);
            if (data.success) {
                console.log('hello');
                setUser(data.user);
                setIsAuthenticated(false);
            }
            navigate('/');
        });
    }
    const unAuthenticatedNavbar = () => {
        return (
            <>
                <div className="ele-left">
                    <a id="logo" href='/'><span style={{ "color": "white", "fontSize": "18px", "padding": "3px", "border": "solid 3px #252243", "borderRadius": "12px", "color": "blue" }}>VIT Community</span></a>
                </div>
                <div className="ele-center">
                    <a className="actve" href='/'> Home</a>
                    <a href='/login'>Login</a>
                    <a href='/register'>Register</a>
                </div>
                <div className="ele-right">
                    <a href="/">AboutUs</a>
                    <a href="/">Contribute</a>
                </div>

            </>
        );
    }

    const authenticatedNavbar = () => {
        return (
            <>
                <a id="logo" href='/'><span style={{ "color": "white", "fontSize": "18px", "padding": "3px", "border": "solid 3px #252243", "borderRadius": "12px", "color": "blue" }}>VIT Community</span></a>
                <div className="element">
                    <a className="actve" href='/'> Home</a>
                    <a href='/explore'>Explore</a>
                    <a href='/notices'>Notices</a>
                    <button type="button"
                        className="btnmine"
                        onClick={onClickLogoutHandler}
                    >Logout</button>

                </div>

            </>
        )
    }

    return (
        <>
            <div className="navb">
                {
                    !isAuthenticated ? unAuthenticatedNavbar() : authenticatedNavbar()
                }

            </div>
            <hr />
        </>
    )
}

export default Navbar;