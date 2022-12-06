
import './App.css';
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import {FaEdit,FaRegTrashAlt,FaRegSave} from "react-icons/fa"


function App() {


  const [list,setList]=useState([ ]);
  const [text,setText]=useState("");
  const [editText,setEditText]=useState("");

  
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

  const editItem=(id,todo)=>{
   
    setList(prevList=>prevList.map(item=>item.id===id ? ({...item,isEditable:!item.isEditable}):item))
    setEditText(todo)
   
    

  }
  const saveItem=(id)=>{
    
    setList(prevList=>prevList.map(item=>item.id===id ? ({...item,todo:editText,isEditable:false}):item))
  }

  const removeItem=(id)=>{
    setList(prevList=>prevList.filter(todoItem=>todoItem.id!==id))

  }
 
  
  return (
    <div className="App">
    <div className="container">
      <h2>Grocery Bud</h2>
      <form>
        <input value={text}  onChange={(event)=>{setText(event.target.value)}} placeholder="e.g. eggs"></input>
        {text.length===0 ? <button type='button'>Submit</button>:<button onClick={addBasket} type="button">Submit</button>}
      </form>

      {list.map((todoItem,index)=>{return <div key={index} className="item-list">
        <div> {!todoItem.isEditable ? <p>{todoItem.todo}</p> :  <input value={editText} onChange={(event)=>setEditText(event.target.value)}></input>}
            
        </div>
        {!todoItem.isEditable ? <FaEdit onClick={()=>editItem(todoItem.id,todoItem.todo)}></FaEdit>:<FaRegSave onClick={()=>saveItem(todoItem.id)}></FaRegSave> } 
        <FaRegTrashAlt onClick={()=>removeItem(todoItem.id)}></FaRegTrashAlt>
        
     </div>})}

      
    </div>
      
    </div>
  );
}

export default App;
