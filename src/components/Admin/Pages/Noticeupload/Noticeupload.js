import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import AuthService from "../../../../services/AuthService";
import PostService from "../../../../services/PostService";
import "./noticeupload.css";

const Noticeupload = () => {
    const [notice, setNotice] = useState({ creator: "", body: "" });
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    const onSubmit = (e)=>{
        e.preventDefault();
        PostService.uploadNotice(notice);

        let bod = "";
        setNotice({...bod});
    }
    const onChange = (e)=>{
        e.preventDefault();
        setNotice({ creator: notice["creator"],  [e.target.name]: e.target.value });
    }


    return (
        <div className="noticeform">
            <form onSubmit={onSubmit}>
                <h1>Header</h1>
                <input type="text" onChange={onChange} name="creator" placeholder="Enter heading..."/>
                <h1>Body</h1>
                <textarea type="text" onChange={onChange} name="body" placeholder="Enter your post here..."/>
                <br/>
                <button type="submit">Post</button>
        </form>
        </div>

    );
}

export default Noticeupload;