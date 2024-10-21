import React from 'react'
import "./style.css"
import {Todo} from "./model"

interface  Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<string>>;
}
const TodoList:React.FC = ({todos,setTodos}:Props) => {
  return 
    <div className="todos">
      
    </div>
  
}

export default TodoList;
