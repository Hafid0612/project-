import { Link, useLinkClickHandler, useNavigate, useParams,  } from "react-router-dom";
import { data } from "./roudata";
export default function Order(){
    const nav = useNavigate();
    const { id } = useParams();
    const product = data.find((p) => p.id === parseInt(id));
console.log(product)

    return(
        <div> 
            <h1>  *panier</h1>
              <div>
            <h3>{product.title} est ajouter, le prix est: {product.price} </h3>
            <img src={product.img} alt={product.title} width="400" />
            <p> </p>
            <button onClick={()=>nav(-1)}>retour Home</button>
        </div>
        </div>
    )
}