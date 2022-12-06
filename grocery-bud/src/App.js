
import './App.css';
import {useEffect,useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import {FaEdit,FaRegTrashAlt,FaRegSave} from "react-icons/fa"


function App() {


  const [list,setList]=useState([ ]);
  const [text,setText]=useState("");
  const [editText,setEditText]=useState("");
  const [editing,setIsEditing]=useState(false)
  
  const addBasket=()=>{
    setList(prevList=>[...prevList,{
      id:uuidv4(),
      todo:text,
      isChecked:false,
      isEditable:false,
    }]
    )
    setEditText(text)
    setText("")

  }

  const editItem=(id)=>{
    list.map((item=>item.id===id & setEditText(item.todo)))
    setList(prevList=>prevList.map(item=>item.id===id ? ({...item,isEditable:!item.isEditable,todo:editText}):item))
    
   
    

  }
  const saveItem=(id)=>{
    
    setList(prevList=>prevList.map(item=>item.id===id ? ({...item,todo:editText,isEditable:false}):item))
  

  }
 
  
  return (
    <div className="App">
    <div className="container">
      <h2>Grocery Bud</h2>
      <form>
        <input value={text}  onChange={(event)=>{setText(event.target.value)}} placeholder="e.g. eggs"></input>
        <button onClick={addBasket} type="button">Submit</button>
      </form>

      {list.map((todoItem,index)=>{return <div key={index}>
        <div> {!todoItem.isEditable ? todoItem.todo :  <input value={todoItem.todo} onChange={(event)=>setEditText(event.target.value)}></input>}
            
        </div>
        {!todoItem.isEditable ? <FaEdit onClick={()=>editItem(todoItem.id)}></FaEdit>:<FaRegSave onClick={()=>saveItem(todoItem.id)}></FaRegSave>}      <FaRegTrashAlt></FaRegTrashAlt>
        
     </div>})}

      
    </div>
      
    </div>
  );
}

export default App;
