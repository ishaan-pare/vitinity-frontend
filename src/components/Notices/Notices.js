import React, { useEffect, useState } from "react";
import PostService from "../../services/PostService";
import "./notices.css";

const Notices = ()=>{
    
    const [notices, setNotices] = useState([]);

    useEffect(()=>{
        PostService.getNotices().then(res=>setNotices(res));
    });
    
    const getMyDate = (x)=>{
        return (new Date(x)).getDate()+"/"+((new Date(x)).getMonth()+1)+"/"+(new Date(x)).getFullYear()+" "+(new Date(x)).getHours()+":"+(new Date(x)).getMinutes()+":"+(new Date(x)).getSeconds();
    }
    

    return(
        <div className="notices">
            <div className="head-notices"><h1>Important Notices</h1></div>
            {
                notices.slice(0).reverse().map((data)=>{
                    return(
                        <div className="post" id={data["_id"]}>
                            <div className="heading">
                                {data["creator"]}
                            </div>
                            <div className="subheading">
                                {getMyDate(data["createdAt"])}
                            </div>
                            <br/>
                            <div className="body">
                                {data["body"]}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Notices;
