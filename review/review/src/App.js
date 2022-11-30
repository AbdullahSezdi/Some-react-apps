import data from "./data.js"
import Reviews from "./review.js";

function App() {

  

  return (
    <div className="App">

    <h1>Our Reviews</h1>    
    <Reviews reviews={data}></Reviews>
    </div>
  );
}

export default App;
