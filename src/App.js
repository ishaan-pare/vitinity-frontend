import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";
import Postsform from "./components/Postsform/Postsform";
import Admin from "./components/Admin/Admin";
import ScrollButton from "./components/Scrollup/ScrollupButton";
import { useContext, useEffect, useState } from "react";
import {BsSignpostFill} from 'react-icons/bs';
import './app.css';
import AuthContext from "./context/AuthContext";
import Notices from "./components/Notices/Notices";
import Academic from './components/Academic/Academic';
import Aboutus from "./components/Aboutus/Aboutus";
import Noticeupload from "./components/Admin/Pages/Noticeupload/Noticeupload";

function App() {
  const [isvis, setIsvis] = useState(false);
  const authcontext = useContext(AuthContext);

  const handleonclick = ()=>{
    console.log(window.location.href)

    if (isvis)
      setIsvis(false)
    else
      setIsvis(true)
  }



  return (
    <div className="App">
      <Router>
        <header>
          <Navbar/>
        </header>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/notices" element={<Notices/>}/>
          <Route path="/academic" element={<Academic/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/noticeupload" element={<Noticeupload/>}/>


        </Routes>
        <Footer show = {isvis}/>
      </Router>
      <div>
        <ScrollButton/>
      </div>
      {
        window.location.href.substring(window.location.href.lastIndexOf('/')+1) === "explore"?<div className="show">
        <button onClick={handleonclick}><BsSignpostFill size={"20px"}/> New Post</button>
      </div>
      :
      <></>
      }
      
    </div>
  );
}

export default App;
