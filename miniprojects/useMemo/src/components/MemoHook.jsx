import { useState } from "react";

export default function MemoHook(){
    const[person,setPerson]=useState("");
    const [text,setText]=useState("");

    const ispersoncool=()=>{
        if(person=="Zoran")return "very cool"
        else if(person=="Najor")return"moderate cool"
        else if(person=="Nuclearmacarooni")return"not cool"
    }
    return (
        <div>
            <input type="text" 
            value={text}
            onChange={(e) =>setText(e.target.value)}
            />
            <div>
                <button onClick={()=>setPerson("Zoran")}>Zoran</button>
                <button  onClick={()=>setPerson("Najor")}>Najor</button>
                <button  onClick={()=>setPerson("Nuclearmacarooni")}>Nuclearmacarooni</button>
            </div>
            <p>{ispersoncool()}</p>
        </div>
    )
}