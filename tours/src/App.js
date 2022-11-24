import {  useState } from "react";
import "./app.css"
import Tours from "./tours";
import data from "./data.js"

function App() {

  const [tours,setTour]=useState(data)





  return (


    <div className="App">

    <div className="container">
      {console.log(tours)}
      <Tours tours={tours}></Tours>
     </div>

     
    </div>
  );
}

export default App;
