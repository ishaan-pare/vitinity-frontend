import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css"

const Admin = ()=>{
    const navigate = useNavigate();


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
                    <span>Total number of Posts posted :10</span><br/>
                    <span>Total number of User registered  :10</span><br />
                    <span>Total number of Notice posted  :10</span><br />
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