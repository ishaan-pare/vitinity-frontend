import React, { useState } from "react";
import AuthService from "../../../../services/AuthService";
import "./adduser.css";


const Adduser = ()=>{

    const [user, setUser] = useState({username: "", registerId: ""});

    const disp = "Please fill the full form correctly"


    const onChange = e => {
        e.preventDefault();

        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        
        if (user["username"] === "" || user["registerId"] === "") {
            window.alert(disp); 
        }
        AuthService.addNewUser(user)
            .then(data => {

                const { message } = data;

                if (message.msgError) {
                    window.alert("error occured");
                }
                else {
                    window.alert("added new user");

                }
            });
    }

    return (
        <div className="adduser-block">
            <h1>Add a new User</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} name="username" placeholder="Enter username" />
                <input type="text" onChange={onChange} name="registerId" placeholder="Enter regusterId" />
                <button onSubmit={()=>{}}>Add</button>
            </form>
        </div>
    )
}
export default Adduser;