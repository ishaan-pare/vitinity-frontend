import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AuthService from "../../services/AuthService";
import PostService from "../../services/PostService";
import "./postsform.css";

const Postsform = () => {
    const [post, setPost] = useState({ creator: "", registerId: "", body: "" });
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    const onSubmit = (e)=>{
        e.preventDefault();
        PostService.uploadPost(post);

        let bod = "";
        setPost({...bod});
    }
    const onChange = (e)=>{
        e.preventDefault();
        setPost({ creator: user["username"], registerId: user["regId"], [e.target.name]: e.target.value });
        console.log(post);
    }
    const showMyForm = () => {
        return (<form onSubmit={onSubmit}>
            <textarea type="text" onChange={onChange} name="body" placeholder="Enter your post here..."/>
            <br/>
            <button type="submit">Post</button>
        </form>);
    }
    const dontShowMyForm = () => {
        return(
            <div className="">

            </div>
        )
    }

    return (
        <div className="postsform">
            {
                isAuthenticated && location.pathname==="/explore" ? showMyForm() : dontShowMyForm()
            }
        </div>

    );
}

export default Postsform;