
import './App.css';
import {useEffect,useState} from "react"

function App() {

  const [list,setList]=useState([""]);
  const [text,setText]=useState();
  const [show,setShow]=useState(false)


  const addBasket=()=>{
    list.push(text)
    setShow(!show)

  }
  
  return (
    <div className="App">
    <div className="container">
      <h2>Grocery Bud</h2>
      <form>
        <input onChange={(event)=>{setText(event.target.value)}} placeholder="e.g. eggs"></input>
        <button onClick={addBasket} type="button">Submit</button>
        {show ? list.map((e)=>{return <p>{e}</p>}):setShow(!show)}
        
      </form>
      
    </div>
      
    </div>
  );
}

export default App;
