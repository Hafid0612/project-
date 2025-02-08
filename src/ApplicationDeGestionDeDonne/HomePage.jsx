import { Link } from "react-router-dom";
import { dataRecette } from "./recetteDate";
import "./Carousel.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addrecette } from './Slice';
import Naavbar from './Navbar';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nom, setNom] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Instructions, setInstructions] = useState('');
  const [pic, setPic] = useState(null);
  const dispatch = useDispatch();
  const Recettes = useSelector((state) => state.Recettes.Data);

  const cardWidth = 270;

  const handleNext = () => {
    if (currentIndex < dataRecette.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAjouter = () => {
    const id = Recettes[Recettes.length - 1].id + 1;
    dispatch(addrecette({
      "id": id, "pic": pic, "nom": nom, "ingredients": Ingredients.split(','), "instructions": Instructions.split(',')
    }));
    setNom('');
    setIngredients('');
    setInstructions('');
    setPic(null);
  };

  return (
    <div>
      <header>
        <Naavbar />
      </header>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Des recettes et des actus culinaires</h1>
      <h6 style={{ textAlign: 'center' }}>Plus de 90 000 recettes faciles et rapides pour vous inspirer en cuisine.</h6>
      
      <div className="carousel">
        <button className="carousel-button left" onClick={handlePrev} disabled={currentIndex === 0}>
          ❮
        </button>
        
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {dataRecette.slice(0, 5).map((recipe) => (
              <div className="carousel-card" key={recipe.id}>
                <Link to={`/details/${recipe.id}`}>
                  <img src={recipe.pic} alt={recipe.nom} />
                </Link>
                <div className="card-content">
                  <h3>{recipe.nom}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-button right"
          onClick={handleNext}
          disabled={currentIndex === dataRecette.slice(0, 5).length - 2}
        >
          ❯
        </button>
      </div>

      <div className='ajouter-div'>
        <h3 className='divTitle'>Ajouter Des Recettes</h3>
        
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
        
        <button className='buttonAj' onClick={handleAjouter}>Ajouter</button>
      </div>
    </div>
  );
}
