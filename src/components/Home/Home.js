import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import './home.css';

const First = ()=>{
    return(
        <div className="first">
            Community app developed by VIT students for VIT students
        </div>
    )
}
const Second = ()=>{
    return(
        <div className="second">
            Community app developed by VIT students for VIT students
        </div>
    )
}

const Home = ()=>{

    return(
        <div className="home">
            <First/>
        </div>
    )
}

export default Home;