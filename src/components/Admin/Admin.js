import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService.js";
import PostService from "../../services/PostService.js";
import "./admin.css"

const Admin = ()=>{
    const navigate = useNavigate();
    const [n_posts, set_nposts] = useState(0);
    const [n_notices, set_nnotices] = useState(0);
    const [n_users, set_nusers] = useState(0);



    useEffect(()=>{
        PostService.getNoticesCount().then((res)=>{
            set_nnotices(res["count"]);
        })
        PostService.getPostsCount().then((res)=>{
            set_nposts(res["count"]);
        })
        AuthService.getUsersCount().then((res)=>{
            set_nusers(res["count"]);
        })
    });


    const handle1 = ()=>{
        navigate("/");
    }

    const handle2 = ()=>{
        navigate("/");
        
    }

    const handle3 = ()=>{
        navigate("/");
        
    }

    const handle4 = ()=>{
        navigate("/");
        
    }
    return (
        <div className="container">
            <div className="details">
                <h2>Details</h2>
                <div className="val">
                    <span style={{"color": "darkblue"}}>Total number of Notice posted :<span style={{"color": "purple"}}>{n_notices}</span></span><br/>
                    <span style={{"color": "darkblue"}}>Total number of User registered  :<span style={{"color": "purple"}}>{n_users}</span></span><br />
                    <span style={{"color": "darkblue"}}>Total number of Posts posted  :<span style={{"color": "purple"}}>{n_posts}</span></span><br />
                </div>
            </div>
            <br/>
            <hr/>
            <div className="comp">
                <div className="comp1" onClick={handle1}>
                    <h3 style={{"color":"red"}}>Upload Notice</h3>
                </div>
                <div className="comp1" onClick={handle2}>
                    <h3 style={{"color":"green"}}>Upload Question Paper</h3>
                </div>
                <div className="comp1" onClick={handle3}>
                    <h3 style={{"color":"purple"}}>Add user</h3>
                </div>
                <div className="comp1" onClick={handle4}>
                    <h3 style={{"color":"darkblue"}}>View Requests</h3>
                </div>
            </div>
        </div>

    )
}

export default Admin;