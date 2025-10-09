import React,{useState} from 'react'
import "./App.css"
import TodoInput from "./components/todoinput";
import Todolist from "./components/todolist";

function App() {
  const [listtodo,setListtodo]=useState([]);
  let addList=(inputText)=>{
    setListtodo([...listtodo,inputText]);
    
  }
  return (
    <div className="main-container">
      <div className="center-container">
          <TodoInput addList={addList}/>
        </div>
         </div>
  )
}

export default App
