import Naavbar from "./Navbar";
import { useSelector,useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { updaterecette } from './Slice';



export default function RecetteDetails() {
    const Recettes = useSelector((state) => (state.Recettes.Data));
    const { id } = useParams();
    const detailsrece = Recettes.find(recipe => recipe.id === parseInt(id));
    const [nom, setNom] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Instructions, setInstructions] = useState('');
  const [pic, setPic] = useState(null); 
  const dispatch = useDispatch();

  const handleUpdate=()=>{
    dispatch(updaterecette({
      id:parseInt(id),"pic": pic,"nom":nom, "ingredients": Ingredients.split(','), "instructions": Instructions.split(',')
    }));
  }

    return (
        <div>
            <header>
                <Naavbar />
            </header>
            <div key={detailsrece.id} className="recipe-card">
  <h3 className="recipe-title">{detailsrece.nom}</h3>
  <img
    src={detailsrece.pic}
    alt={detailsrece.nom}
    className="recipe-image"
    height="400px"
    width="600px"
  />
  <h4>Ingredients</h4>
  <ul className="recipe-ingredients">
    {detailsrece.ingredients.map((ing, id) => (
      <li key={id} className="ingredient-item">
        {ing}
      </li>
    ))}
  </ul>
  <h4>Instructions</h4>
  <p className="recipe-instructions">{detailsrece.instructions}</p>
</div>
<div className='ajouter-div'>
        <h3 className='divTitle'>Modifier la Recette
        </h3>
        
        <h6>Pic:</h6>
        <input type="file" className="input-file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => setPic(event.target.result);
              reader.readAsDataURL(file);
            }
          }}
        />
        
        <h6>Nom:</h6>
        <input type="text" className="input-text" value={nom} onChange={(e) => setNom(e.target.value)} />
        
        <h6>Ingredients:</h6>
        <textarea className="textarea" value={Ingredients} onChange={(e) => setIngredients(e.target.value)} />
        
        <h6>Instructions:</h6>
        <textarea className="textarea" value={Instructions} onChange={(e) => setInstructions(e.target.value)} />
        
        <button className='buttonAj' onClick={handleUpdate} >Modifier</button>
      </div>
        </div>
    )
}


