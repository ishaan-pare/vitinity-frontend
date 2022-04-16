import React, { useEffect, useState } from "react";
import './aboutus.css';



const Aboutus = ()=>{

    const [who, setWho] = useState(1);

    
    useEffect(()=>{
       

        if(who == 1) {
            document.getElementById("lef").style.backgroundColor = "grey";
            document.getElementById("righ").style.backgroundColor = "whitesmoke";

        }
        else{
            document.getElementById("lef").style.backgroundColor = "whitesmoke";
            document.getElementById("righ").style.backgroundColor = "grey";

        }
    })

    const handleclicke = ()=>{
        if (who == 0){
            setWho(1);
        }
        else
            setWho(0);
    }

    const data = [
        {
            "name": "Ishaan Pare",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        },
        {
            "name": "Sarthak Narain",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        },
        {
            "name": "Dhwaj Dhruvkar",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        },
        {
            "name": "Sakshi Malukani",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        },
        {
            "name": "Siddharth Sharma",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        }

    ]

    const data1 = [
        {
            "name": "Ishaan Pare",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        },
        {
            "name": "Sarthak Narain",
            "role": "Project Management and Full Stack development",
            "desc": "I am Ishaan Pare and I have contributed as a project manager of this website. My main focus is on the both Frontend and the backend part majorly establishing the connection between them",
        },
        

    ]

    const Creators = ()=>{
        return(

        
            <div className="aboutus">
                <div className="head-aboutus">
                    <div id="lef" className="lef" onClick={handleclicke}>
                        <h1>
                            Guides
                        </h1>
                    </div>
                    <div id="righ" className="righ" onClick={handleclicke}>
                    <h1>
                            Creators

                        </h1>
                    </div>
                </div>
                {
                    data.slice(0).map(data=>{
                        return (
                            <div className="post" id={data["_id"]}>
                                <div className="heading">
                                    {data["name"]}
                                </div>
                                <div className="subheading">
                                    {data["role"]}
                                </div>
                                <br/>
                                <div className="desc">
                                    {data["desc"]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    const Guides = ()=>{
        return(

        
            <div className="aboutus">
                <div className="head-aboutus">
                    <div id="lef" className="lef" onClick={handleclicke}>
                        <h1>
                            Guides

                        </h1>
                    </div>
                    <div id="righ" className="righ" onClick={handleclicke}>
                    <h1>
                            Creators

                        </h1>
                    </div>
                </div>
                {
                    data1.slice(0).map(data1=>{
                        return (
                            <div className="post" id={data1["_id"]}>
                                <div className="heading">
                                    {data1["name"]}
                                </div>
                                <div className="subheading">
                                    {data1["role"]}
                                </div>
                                <br/>
                                <div className="desc">
                                    {data1["desc"]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return(
        <>
            {who==0?<Creators/>:<Guides/>}
        </>
    )
}

export default Aboutus;