import React from "react";
import "./css/message.css";

const Message = (props)=>{
    return(
        <div className={"message"+props.msgcode}>
            {props.text}
        </div>
    )
}

export default Message;