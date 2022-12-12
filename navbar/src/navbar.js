import { useState } from "react";
import { FaFacebook,FaTwitter,FaLinkedin,FaBars} from "react-icons/fa";
export default function Navbar() {

    const [show,setShow]=useState(false)

    return (
        <div>
            <nav className="navigation">
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2022/02/Trader-Joes-Logo-700x394.png"></img>
        <div className="navigation-menu">
            <ul>
                <li><a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/project">Project</a>
                    <a href="/contact">Contact</a>
                    <a href="/profile">Profile</a> 
                </li>
            </ul>
        </div>

        <div className="social-media">
            <ul>
                <li>
                <a href="https://www.facebook.com" target="_blank" ><FaFacebook/></a>
                <a href="https://twitter.com/home" target="_blank"><FaTwitter/></a>
                <a href="https://www.linkedin.com" target="_blank"><FaLinkedin/></a>

                </li>
            </ul>
        </div>



        <button className="toggle" onClick={()=>setShow(!show)}><FaBars/></button>
    
    </nav>

        <div>
        {show && <div className="a">
            
            <a href="/home">Home</a>
             <a href="/about">About</a>
             <a href="/project">Project</a>
             <a href="/contact">Contact</a>
             <a href="/profile">Profile</a> 
         
     
 </div>}
        </div>


        </div>
    
    
    
    
    
    
    
    )
}