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

function App() {
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
        </Routes>
        <Footer/>
      </Router>
      <div>
        <ScrollButton/>
      </div>
    </div>
  );
}

export default App;
