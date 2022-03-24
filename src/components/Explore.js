import React, { useEffect, useState } from "react";
import PostService from "../services/PostService.js";
import "./css/explore.css";

const Explore = ()=>{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        PostService.getPosts().then((res)=>{
            setPosts(res);
        });
    });
    
    
    
    return (
        <div className="explore">
            {
                posts.map(data=>{
                    return (
                        <div className="post">
                            <div className="heading">
                                {data["creator"]}
                            </div>
                            <div className="subheading">
                                {data["registerId"]}
                            </div>
                            <div className="body">
                                {data["body"]}
                            </div>
                            <br/>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Explore;