import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
export default function Recupere(){
    const [Dataco,setDataco] = useState([]);

    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/countries')
        .then(responce=>responce.json())
        .then(data=>{
            setDataco(data)
            console.log(data)
        })
        .catch(error=>console.error('errorrrr',error))

    },[])
 
    return (
        <div>
<ul>
    {Dataco.map((e,id)=>
    <li key={id}>{e.country}-----------------{e.cases}</li>
    )}
</ul>
        </div>
    )
}