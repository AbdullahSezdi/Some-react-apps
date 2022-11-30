import menu from "./data";
import List from "./list";
import React, { useState } from 'react';
function App() {
  const [icerik,setIcerik]=useState(menu)

  console.log(icerik)

  const select=(value)=>{
    let newItems;
    if(value==1){
      newItems=menu.filter((item)=>item.category=="breakfast")
    }else if(value==2){
      newItems=menu.filter((item)=>item.category=="lunch")
    }else if(value==3){
      newItems=menu.filter((item)=>item.category=="shakes")
    }else{
      newItems=menu;
    }
    return setIcerik(newItems);
  }



  return (
    <div className="App">

    <div className='Menu'>
      <h1>Our Menu</h1>
      <div className='butons'>
        <button onClick={()=> select(0)}>All</button>
        <button onClick={()=> select(1)}>Breakfast</button>
        <button onClick={()=> select(2)}>Lunch</button>
        <button onClick={()=> select(3)}>Shakes</button>
      </div>
      {icerik.map(veri=> <List id={veri.id} datas={veri}></List>)}
      
  
    
    </div>
   
    </div>
  );

}

export default App;
