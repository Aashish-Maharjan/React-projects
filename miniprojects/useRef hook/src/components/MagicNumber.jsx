import {useState,useRef} from 'react';
{/*the ref hook doesnt cause any rerenders when it gets updated but 
the value is persisted upon rerendering*/}
export default function MagicNumber(){
    const magicNumber=5;
    const secondmagicNumber=10;
    console.log("The component is rendering");
    const [messages,setMessages]=useState({
        p:"",
        button:"Click me until you reach magic number",

    });
    
    const count =useRef(0);

    const handleClick =()=>{
        count.current=count.current+1;
        if(count.current===magicNumber){
            setMessages({
                p:"You reached it!!!",
                button:"Click me until you reach the second magic number",
            });
        }
        else if(count.current===secondmagicNumber){
            setMessages({
                p:"You reached it again!!!!!",
                button:"Stop clicking me!!!!!!!",
            });
        }
       
    }
    return(
        <div>
            {messages.p &&<p>{messages.p}</p>}            
            <button  onClick={handleClick}>{messages.button}</button>
        </div>
    );
}