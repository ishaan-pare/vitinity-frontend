import React, { useEffect, useState } from "react";
import PostService from "../services/PostService.js";
import "./css/explore.css";

const Explore = ()=>{

    const [posts, setPosts] = useState([]);

    const getMyDate = (x)=>{
        return "Created on: "+(new Date(x)).getDate()+"/"+((new Date(x)).getMonth()+1)+"/"+(new Date(x)).getFullYear()+" "+(new Date(x)).getHours()+":"+(new Date(x)).getMinutes()+":"+(new Date(x)).getSeconds();
    }

    useEffect(()=>{
        PostService.getPosts().then((res)=>{
            setPosts(res);
        });
    });
    return (
        <div className="explore">
            <div className="head-explore"><h1>Feeds</h1></div>

            {
                posts.slice(0).reverse().map(data=>{
                    return (
                        <div className="post">
                            <div className="heading">
                                {data["creator"]}
                            </div>
                            <div className="subheading">
                                {data["registerId"]}
                            </div>
                            <br/>
                            <div className="body">
                                {data["body"]}
                            </div>
                            <br/>
                            <br/>

                            <div className="foot">
                                {getMyDate(data["createdAt"])}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    
    );
}

export default Explore;