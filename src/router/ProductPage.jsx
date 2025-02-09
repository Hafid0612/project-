import { useParams, Link } from "react-router-dom";
import { data } from "./roudata";

export default function ProductPage(){
    const { id } = useParams();
    const product = data.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2>Produit non trouvé</h2>;
    } 

    return (
        
        <div>
            <h1>{product.title}</h1>
            <img src={product.img} alt={product.title} width="400" />
            <h3>{product.review}</h3>
            <p>{product.price} </p>
            <Link to="/Home">Aller vers la page d'accueil</Link>
        </div>
    );
};

