import Sidebar from './sidebar';
import './App.css';
import { FaEthereum } from "react-icons/fa";
import { useState } from 'react';
import Modal from './modal';

function App() {

  const [show,setShow]=useState(false)
  const [modal,setModal]=useState(false)
  return (
    <div className="App">
    <div className='sidebar'>
      <button className='eth' onClick={()=>{setShow(!show)}}><FaEthereum/>Ethereum</button>
      {show &&<Sidebar></Sidebar> } 
    </div>
    <button className='modal-buton' onClick={()=>setModal(!modal)}>Open modal</button>
    {modal && <Modal modal={setModal}></Modal>} 
    
    
    </div>
  );
}

export default App;
