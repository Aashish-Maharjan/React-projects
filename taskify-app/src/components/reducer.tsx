import { useReducer,useState } from 'react'
import {Todo} from "./model"

type Actions=
    |{type:"add";payload:string}
    |{type:"remove";payload:number}
    |{type:"done";payload:number};
 
const Todoreducer=(state:Todo[],action:Actions)=>{
     switch(action.type){
        case"add":
            return[
                ...state,
                {id:Date.now,todo:action.payload,isDone:false}
            ];
        case"remove":
            return[
                state.filter((todo)=>todo.id!==action.payload)
            ];
        case"done":
            return
                state.map((todo)=>
                todo.id!==action.payload ?{...todo,isDone:!todo.isDone}:todo
            );
     }
}
const Reducereg = () => {
    const [state, dispatch] = useReducer(Todoreducer, []);
    const [todoInput, setTodoInput] = useState("");
  
    const handleAdd = () => {
      if (todoInput.trim() === "") return; // Prevent adding empty todos
      dispatch({ type: "add", payload: todoInput });
      setTodoInput(""); // Clear the input after adding
    };
  
    const handleRemove = (id: number) => {
      dispatch({ type: "remove", payload: id });
    };
  
    const handleToggleDone = (id: number) => {
      dispatch({ type: "done", payload: id });
    };
  
    return (
      <div>
        <h1>Taskify App</h1>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add Task</button>
  
        <ul>
          {state.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
              {todo.todo}
              <button onClick={() => handleToggleDone(todo.id)}>
                {todo.isDone ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Reducereg;
