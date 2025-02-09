import { useEffect } from "react";
import { useState } from "react";

export default function Att(){
    const [items,setItems] = useState([]); 

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(data=>{
            setItems(data)
            console.log(data) 
        }) 
        .catch(error=>console.error('sir t9wd mkayn la data la 9lawi',error))
    },[])
    
    return(
        <div>
            {items.map((e,index)=><ul key={index}><li style={{ color: 'red'}}>user {e.id}:</li>
            <li>{e.name}</li>
            <li>{e.username}</li>
            <li>{e.email}</li>
            <li>{e.website}</li>
            <li>{e.phone}</li>
            </ul>
        )}
        </div>
    )
}
