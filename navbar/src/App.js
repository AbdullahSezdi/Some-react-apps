import "./App.css"
import { FaFacebook,FaTwitter,FaLinkedin,FaBars} from "react-icons/fa";
import { useState } from "react";



function App() {

  const [show,setShow]=useState(true)

  const toggleLinks=()=>{
    setShow(!show)
  }

  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2022/02/Trader-Joes-Logo-700x394.png"></img>
        <button className="toggle" onClick={toggleLinks}><FaBars/></button>
        {show ? (
          <div className="flex-item"> <div className="category">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Contact</a>
          <a href="#">Profile</a> 
        </div>
        <div className="social-media">
        <a href="wwww.facebook.com" target="_blank" ><FaFacebook/></a>
        <a href="wwww.twitter.com"><FaTwitter/></a>
        <a href="wwww.linkedin.com"><FaLinkedin/></a>

        </div> </div>
       ): <div className="category">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Contact</a>
          <a href="#">Profile</a> 
        </div>}
        
        
      </div>
     
    </div>
  );
}

export default App;
