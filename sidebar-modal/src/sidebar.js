import "./App.css"
import { FaHome,FaBlind,FaComments,FaHandsHelping,FaProjectDiagram} from "react-icons/fa";

export default function Sidebar(){

    return(
        <div className="category">
            <ul>
                <li> <a href="/"><FaHome></FaHome> <span>Home</span></a></li>
                <li><a href="/"><FaBlind></FaBlind> <span>Profile</span></a></li>
                <li><a href="/"> <FaComments></FaComments><span>Contact</span></a></li>
                <li><a href="/"><FaProjectDiagram></FaProjectDiagram><span>Project</span></a></li>
                <li><a href="/"><FaHandsHelping></FaHandsHelping><span>Help</span></a></li>
                
            </ul>
        </div>
    )
}