import { useState } from "react";
import data from "./data";
import List from "./list";

function App() {

  const [tour,setTour]=useState(data)



  return (


    <div className="App">

    <div className="container">
      <h2>Our Tours</h2>
      <List tours={tour}></List>
    
    
     </div>

     
    </div>
  );
}

export default App;
