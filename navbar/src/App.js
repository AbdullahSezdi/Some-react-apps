import "./App.css"
import { FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2022/02/Trader-Joes-Logo-700x394.png"></img>
        <div className="category">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Contact</a>
          <a href="#">Profile</a>
        </div>
        <div className="social-media">
        <a href="htpps://wwww.facebook.com"><FaFacebook/></a>
        <a href="wwww.twitter.com"><FaTwitter/></a>
        <a href="wwww.linkedin.com"><FaLinkedin/></a>
        
        
        

        </div>
      </div>
     
    </div>
  );
}

export default App;
