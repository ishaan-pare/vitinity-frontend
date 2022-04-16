import React from "react";
import { useNavigate } from "react-router-dom";
import "./academic.css"

const Academics = ()=>{
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
                <h2>Thought of the day</h2>
                <div className="val1">
                    <div className="leftval">
                        <img src="http://abdulkalam.nic.in/images_new/profile-img.jpg"></img>
                    </div>
                    <div className="rightval">
                        <span>"The best brains of the nation may be found on the last benches of the classroom"</span><br/>
                        <span id="greet">~DR. A.P.J. ABDUL KALAM</span>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>
            <div className="comp">
                <div className="comp1" onClick={handle1}>
                    <h3 style={{"color":"red"}}>View Notices</h3>
                </div>
                <div className="comp1" onClick={handle2}>
                    <h3 style={{"color":"green"}}>View Question Paper</h3>
                </div>
                <div className="comp1" onClick={handle3}>
                    <h3 style={{"color":"purple"}}>Internships</h3>
                </div>
                <div className="comp1" onClick={handle4}>
                    <h3 style={{"color":"darkblue"}}>Previous Question Paper</h3>
                </div>
            </div>
        </div>

    )
}

export default Academics;