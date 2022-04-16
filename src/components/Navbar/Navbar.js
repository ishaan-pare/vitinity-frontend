import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router";
import './navbar.css';
import {AiOutlineHome, AiOutlineNotification} from 'react-icons/ai';
import {GrLogin,GrUserAdmin} from 'react-icons/gr';
import {BsPersonCheck, BsGithub, BsFillPersonFill} from 'react-icons/bs';
import {BiCommand} from 'react-icons/bi';
import {SiAzuredataexplorer} from 'react-icons/si';
import {HiAcademicCap} from 'react-icons/hi';
import {FaPowerOff} from 'react-icons/fa';


const Navbar = (props) => {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const onClickLogoutHandler = () => {
        navigate('/');

        AuthService.logout().then(data => {
            console.log(data);
            if (data.success) {
                console.log('hello');
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }
    const unAuthenticatedNavbar = () => {
        return (
            <>
                <nav>
                    <div className="menu">
                        <a className="active" href="/"><AiOutlineHome size={"15px"}/> Home</a>
                        <a href="/login"><GrLogin size={"15px"}/> Login</a>
                        <a href="/register"><BsPersonCheck size={"15px"}/> SignUp</a>
                        <a href="/aboutus"><BiCommand size={"15px"} /> AboutUs</a>
                        <a href="https://github.com/ishaan-pare/vitinity-frontend.git" style={{"backgroundColor": "purple", "color": "whitesmoke"}}><BsGithub size={"15px"}/> Github</a>
                        <div id="barhov" class="animation start-home"></div>
                    </div>
                    
                </nav>
            </>
        );
    }

    const authenticatedNavbar = () => {
        return (
            <>
            <nav className="authnav">
                {/* todo */}
                <div className="menu">
                    <a href="/"><AiOutlineHome size={"15px"}/> Home</a>
                    <a className="actve" href='/explore'><SiAzuredataexplorer size={"15px"}/> Explore</a>
                    <a href='/notices'><AiOutlineNotification size={"18px"}/> Notices</a>
                    <a href='/academic'><HiAcademicCap size={"18px"}/>Academics</a>
                    {
                        user["isAdmin"]?<a href="/admin"><GrUserAdmin size={"15px"}/>Admin</a>:<></>
                    }
                    {
                        ((user["isAdmin"]==null ) && isAuthenticated)?window.location.reload():null
                    }
                    <div class="animation start-home"></div>
                </div>
            </nav>
            <div className="user">
                    <a><BsFillPersonFill size={"60px"}/></a>
                    <button type="button"
                        className="btnmine"
                        onClick={onClickLogoutHandler}
                    ><FaPowerOff size={"30px"}/></button> 
            </div>
            </>
        )
    }

    return (
        <div className="topnav">
                {
                    !isAuthenticated ? unAuthenticatedNavbar() : authenticatedNavbar()
                }

        </div>
    )
}

export default Navbar;