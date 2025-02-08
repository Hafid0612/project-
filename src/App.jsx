import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';   
import AllRecettes from './ApplicationDeGestionDeDonne/AllRecettes';
import Home from './ApplicationDeGestionDeDonne/HomePage';
import RecetteDetails from "./ApplicationDeGestionDeDonne/RecetteDetails";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
    <Route path='/Recettes' element={<AllRecettes/>} />
    <Route path='/details/:id' element={<RecetteDetails/>} />

 
    </Routes>
</BrowserRouter>
   
    
  )
}

export default App;
