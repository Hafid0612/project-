import { useState } from "react"
import Enfant from "./enfant";

export default function Parent(){
    const [msgFromChild,setMsgFromChild] = useState();
    function handleReciveData(msg){
        setMsgFromChild(msg)
    }
    const [counter,setCounter] = useState(0);
    function addcount(){
        setCounter(c=>c+1);
    }
    return(
        <div style={{backgroundColor:"green",width:"500px",height:"500px"}}>
            parent component
            <button onClick={addcount}>press</button>
            <p>message from child: {msgFromChild}</p>
            <Enfant sendDataToParent={handleReciveData} counter={counter}/>
        </div>
    )
}