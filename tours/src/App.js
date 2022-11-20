import { useState } from "react";
import data from "./data";
import List from "./list";
import "./app.css"

function App() {

  const [tour,setTour]=useState(data)
  const [showMore,setShowMore]=useState(false)


  return (


    <div className="App">

    <div className="container">
      <h2>Our Tours</h2>
      <List tours={tour} showMore={showMore} setShowMore={setShowMore}></List>
     </div>

     
    </div>
  );
}

export default App;
