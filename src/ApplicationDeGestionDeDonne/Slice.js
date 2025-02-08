import { createSlice } from '@reduxjs/toolkit';
import { dataRecette } from "./recetteDate"

const recetteSlice = createSlice({
    name: 'Recettes',
    initialState: { Data: dataRecette },
    reducers: {
        addrecette: (state, action) => {
            state.Data.push(action.payload);
        },
        
        deleterecette: (state, action) => {
            state.Data = state.Data.filter(recipe => recipe.id !== action.payload.id)

        },
        searchrecette: (state, action) => {
            state.filter = state.Data.filter((value) =>
                value.nom.toLowerCase().includes(action.payload.toLowerCase()) || 
                (Array.isArray(value.ingredients) ? 
                    value.ingredients.some(ingredient => ingredient.toLowerCase().includes(action.payload.toLowerCase())) : 
                    value.ingredients.toLowerCase().includes(action.payload.toLowerCase())
                )
            );
        },

      
        updaterecette: (state, action) => {
            state.Data = state.Data.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return (
                        {
                            ...recipe,
                            pic: action.payload.pic,
                            nom: action.payload.nom,
                            ingredients: action.payload.ingredients,
                            instructions: action.payload.instructions
                        }
                    )
                } else {
                    return recipe;
                }
            })
        }
    }
});
export const {addrecette,deleterecette,updaterecette,searchrecette} = recetteSlice.actions;
export default recetteSlice.reducer;