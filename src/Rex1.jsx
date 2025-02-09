import React, { Component } from 'react'; 
import { Routes, Route, Link } from 'react-router-dom'; 
class Rou extends Component { 
  render() { 
    return ( 
      <div> 
        <ul> 
          <li>  <Link to="/">Home</Link> 
          </li> 
          <li> 
            <Link to="/about">About</Link> 
          </li> 
          <li> 
            <Link to="/blog">Blog</Link> 
          </li> 
        </ul> 
        <div className="main-route-place"> 
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/blog" element={<Blog />} /> 
          </Routes>           
        </div> 
      </div> 
    ); 
  } 
} 

class Home extends React.Component { 
  render()  { 
    return ( 
      <div> 
        <h2>Home</h2> 
      </div> 
    ); 
  } 
} 
class About  extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h2>About</h2> 
      </div> 
    ); 
  } 
} 
class Blog  extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h2>Blog</h2> 
      </div> 
    ); 
  } 
} 
export default Rou;