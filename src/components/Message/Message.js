import React from "react";
import "./message.css";

const Message = (props)=>{
    return(
        <div className={"message"+props.msgcode}>
            {props.text}
        </div>
    )
}

export default Message;