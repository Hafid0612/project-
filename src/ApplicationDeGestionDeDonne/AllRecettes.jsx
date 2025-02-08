import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './ca.css';
import "./Carousel.css";
import { useSelector, useDispatch } from 'react-redux';
import { deleterecette, searchrecette } from './Slice';
import Naavbar from './Navbar';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';


export default function AllRecettes() {
    const Recettes = useSelector((state) => state.Recettes.Data);
    const filterfinal = useSelector(state => state.Recettes.filter);
    const [value,setValue] =useState(''); 

    const dispatch = useDispatch();
    const nouvellesRecettes = Recettes.slice(15);
    const handleSearch = (e) => {
        setValue(e.target.value);
        dispatch(searchrecette(e.target.value));
    };


    return (
        <div>
            <header>
                <Naavbar />
            </header>
            <div className='searchBar'>
                <div className="input-s">
                <FaSearch id="search-icon" />
                <input className='in' type="search" onChange={handleSearch}  placeholder="Type to search..."/>
                </div>
                
                <ul className='listre'>
                    {filterfinal && filterfinal.length > 0 ? (
                        filterfinal.map(item => (
                            <li className='lilist' key={item.id}>
                                <Link className='listtext' to={`/details/${item.id}`}>{item.nom}</Link>
                            </li>
                        ))
                    ) : (
                        null
                    )}
                </ul>
            </div>
            {nouvellesRecettes.length > 0 ? (
                <div>
                    <h3>Mes Recettes</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {nouvellesRecettes.map((recipe) => (
                            <div className="card" key={recipe.id}>
                                <Link to={`/details/${recipe.id}`}>
                                    <img src={recipe.pic} alt={recipe.nom} height={'250px'} width={'350px'} />
                                </Link>
                                <div className="ca-content">
                                    <h3>{recipe.nom}</h3>
                                    <button className='deletebu' onClick={() => dispatch(deleterecette({ id: recipe.id }))}>delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Aucune nouvelle recette Ajouter</p>
            )}

            <h3>Tout Les Recettes</h3>
            <div className="ca-card">
                {Recettes.slice(0, 15).map((recipe) => (
                    <div className="card" key={recipe.id}>
                        <Link to={`/details/${recipe.id}`}>
                            <img src={recipe.pic} alt={recipe.nom} height={'250px'} width={'350px'} />
                        </Link>
                        <div className="ca-content">
                            <h3>{recipe.nom}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
