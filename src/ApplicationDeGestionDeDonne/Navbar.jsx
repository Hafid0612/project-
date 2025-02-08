import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Naavbar(){
    return(
        <div>
             <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home"><strong style={{ fontSize: '35px' }}>CuisineHB</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/Recettes">Tout Les Recettes</Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#web">actus</NavDropdown.Item>
                <NavDropdown.Item href="#app">recettes faciles et rapides</NavDropdown.Item>
                <NavDropdown.Item href="#design">contact us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    )
}