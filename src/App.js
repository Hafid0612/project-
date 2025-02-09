import React, { Component } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import Recupere from './excorona/recupereAPI';

function App() {
  return (
 <>
 <Recupere/>
 </>
  );
}


export default App;


{/*  <Routes>
    <Route path='/home' element={<PageAccueil/>} />
    <Route path='/users' element={<FetchUsers/>} />

    </Routes>*/}
  {/*  <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/orders/:id" element={<Order />}/>
        <Route path="/Panier/:ids" element={<Panier />}/>
        <Route path="*" element={<Nomatch />}/>



      </Routes> */}
