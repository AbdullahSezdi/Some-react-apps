import {  useState } from "react";
import "./app.css"
import Tours from "./tours";
import data from "./data.js"

function App() {


  const [tours,setTours]=useState(data)

  const removeTours = (id) =>{
    const newData=tours.filter((tour)=> tour.id !==id)
    setTours(newData)
}

 
    return (

      <div className="App">
  
      <div className="container">
        <Tours tours={tours} removeTours={removeTours}></Tours>
       </div>
  
       
      </div>
    );
  

  }
  

export default App;
