import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext";

import './home.css';

const Home = ()=>{

    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);


    const AuthPart = ()=>{
        return(
            <>
                <div id="one"> 🙏 Welcome to Vitinity 🙏 </div>
                <div id="two"> 
                    An online platform for all your academics and non academics doubts, internships, ideas forum and lot more. 
                </div>
            </>
        )
    }
    const UnauthPart = ()=>{
        return(
            <>
                <div id="one"> 🙏 Welcome to Vitinity 🙏 </div>
                <div id="two"> 
                    An online platform for all your academics and non academics doubts, internships, ideas forum and lot more. 
                </div>

                <div className="buttons">

                    <button>Login</button>
                    <button>Register</button>
            </div>
            </>
        )
    }
    return(
        <div className="home">
            
            {isAuthenticated?<AuthPart/>:<UnauthPart/>}
        </div>
    )
}

export default Home;