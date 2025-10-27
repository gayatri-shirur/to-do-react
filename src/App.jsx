import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/todoinput'
import Todolist from './components/todolist'

function App() {
  const [listtodo, setlisttodo] = useState([]);
  let addList =(inputText)=>{
    setlisttodo([...listtodo,inputText]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1></h1>
        </div>
        </div>
  )
}

export default App