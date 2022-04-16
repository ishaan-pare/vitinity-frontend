import React from "react";


const Notices = ()=>{
    const data = {"1":"hello"}
    return(
        <div className="notices">
            {data["1"]}
        </div>
    );
}

export default Notices;
