import React, { useContext, useEffect, useState } from "react";
import {AiFillDelete} from 'react-icons/ai';
import {AuthContext} from "../../context/AuthContext";
import {BiUpvote, BiDownvote} from 'react-icons/bi';
import PostService from "../../services/PostService.js";
import "./explore.css";
import AuthService from "../../services/AuthService";

const Explore = ()=>{

    const [posts, setPosts] = useState([]);
    const [admins, setAdmins] = useState([]);

    const authContext = useContext(AuthContext);




    const getMyDate = (x)=>{
        return "Created on: "+(new Date(x)).getDate()+"/"+((new Date(x)).getMonth()+1)+"/"+(new Date(x)).getFullYear()+" "+(new Date(x)).getHours()+":"+(new Date(x)).getMinutes()+":"+(new Date(x)).getSeconds();
    }
    useEffect(()=>{
        
        PostService.getPosts().then((res)=>{
            setPosts(res);     
        });
        AuthService.getAllAdmins().then((res)=>{
            const admins = res.map((data)=>data["regId"]);
            setAdmins(admins);
        });
        console.log(admins);
    },[admins,posts]);

    const handleUpvote = async (id,lis)=>{

        if (lis.indexOf(authContext.user["_id"]) === -1) {
            await PostService.upVote(id);
            document.location.reload();
        }
        else
            alert("Already voted")
        
    }
    const handledownvote = async (id, lis)=>{

        if (lis.indexOf(authContext.user["_id"]) === -1) {
            await PostService.downVote(id);
            document.location.reload();
        }
        else
            alert("Already voted")

        
    }
    return (
        <div className="explore">
            <div className="head-explore"><h1>Feeds</h1></div>
            {
                posts.slice(0).reverse().map(data=>{
                    return (
                        <div className="post" id={data["_id"]}>
                            <div className="heading">
                                {
                                admins.indexOf(data["registerId"])!==-1?<span style={{"color": "red"}}>{data["creator"]+" (admin)"}</span>:<span>{data["creator"]}</span>
                                }
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
                            <div className="del"> 
                                <BiUpvote onClick={()=>handleUpvote(data["_id"], data["voted"])} size={"25px"} color="green"/><span>{data["likes"]}</span><BiDownvote onClick={()=>handledownvote(data["_id"], data["voted"])} size={"25px"} color="red"/>
                                <div style={{"width": "88%"}}></div>
                                {authContext.user["regId"] == data["registerId"]?<AiFillDelete id="delicon" onClick={()=>PostService.deletePost(data["_id"])} color="red" size={"20px"}/>:<></>}                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    
    );
}

export default Explore;