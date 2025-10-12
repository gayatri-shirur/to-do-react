import React,{useState} from "react";

function TodoInput(props) {
    const [inputText, setInputText] = useState('');
  return (
    <div>
       <input type="text" 
        className="input-box-todo" 
        placeholder="Enter your Todo"
        value={inputText}
        onChange={(e)=>{
            setInputText(e.target.value)
        }}
        />
     <button className='add-btn'
        onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>
      
      </div>
  )
}

export default TodoInput
