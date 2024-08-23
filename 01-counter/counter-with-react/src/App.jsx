import "./App.css";
import {userState} from "react";

function App(){
  const[count,setCount]=userState(0);

  const addToCount=()=>{
    if(count<10){
      setCount(count + 1);
    }
  };
  const subtractFromCount=()=>{
    if(count>0){
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h4>The current count is..</h4>
      <h1>{count}</h1>
      <button onClicK={subtractFromCount}>-</button>
      <button onClicK={addToCount}>+</button>
    
    </div>
  );
}
export default App;