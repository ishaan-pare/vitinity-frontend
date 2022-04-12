import React from "react";
import "./footer.css";
import Postsform from "../Postsform/Postsform";
import {AiFillGithub,AiOutlineLinkedin, AiFillFacebook} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';

const Footer = (props)=>{


    return (
        <div className="footer">
            {
                props.show?<Postsform/>:<></>
            }
                
            <div className="icons">
                <AiFillGithub size={"25px"}/>
                <AiOutlineLinkedin size={"25px"}/>
                <AiFillFacebook size={"25px"}/>
                <FaTelegramPlane size={"25px"}/>
            </div>
            
        </div>
    )
}

export default Footer;