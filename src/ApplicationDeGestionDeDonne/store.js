import { configureStore } from '@reduxjs/toolkit';
import recetteSlice from './Slice';

const store = configureStore({
reducer: {
Recettes: recetteSlice
}
});
 export default store;