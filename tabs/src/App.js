import { useEffect, useState } from 'react';
import './App.css';
import Content from './content';

function App() {

  const url="https://course-api.com/react-tabs-project"
  const [data,setData]=useState([])
  const [icerik,setIcerik]=useState("")
  

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(response=> setData(response))
  },[])

  const select=(value)=>{
    console.log("datavalue:", data[value].title)
    setIcerik(data[value])
  }


  return (
    <div className="App">
    <div className='Container'>
      <div className='button'>
        <button onClick={()=>select(0)}>TOMMY</button>
        <button onClick={()=>select(1)}>BIGDROP</button>
        <button onClick={()=>select(2)}>CUKER</button>
      </div>
      <Content data={icerik}></Content>
    </div>
    
    </div>
  );
}

export default App;
