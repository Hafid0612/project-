
import { Link } from "react-router-dom";

export default function PageAccueil() {
 
    return ( 
        <div>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to={"/home"}> 
                    <li>
                        page d'Accueil
                    </li>
                </Link>
                 <Link to="/listUser">
                 <li>
                    Liste des stagiaires
                    </li>
                 </Link> 
                <Link to="/add">
                <li>
                    Ajouter un stagiaire
                    </li>
                </Link>
               
            </ul>
         
           <h1>Users Management</h1>
        </div>
    )
} 



