
import { useState } from 'react';
import './App.css';
import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';

function App() {

  const [numberP,setNumberP]=useState();
  const [text,setText]=useState([])
 

  const createText= ()=>{
    let text=loremIpsum({p:numberP})   
    setText(text)

  }
 

  return (
    <div className="App">

    <div className='header'>
      <h1>TIRED OF BORING LOREM IPSUM</h1>
      <div className='user'>
        <p>Paragraphs:</p>
        <form className='input'>
        <input onChange={(event)=>{setNumberP(event.target.value)}}></input>
        <button onClick={createText} type='button'>Generate</button>
        </form>   
      </div>
      {text.map((t)=>{return <p className='content'>{t}</p>})}
    </div>
   
    </div>
  );
}

export default App;
