import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import "../src/components/css/navbar.css";
import Footer from "./components/Footer";
import Postsform from "./components/Postsform";

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
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
