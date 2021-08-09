import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Image
import logo from '../../images/logo-text.png';

const Navigation = () => {

    window.addEventListener('scroll', function () {
        let navbar = document.querySelector('nav');
        let logo = document.querySelector('.navbar-logo')
        let windowPosition = window.scrollY > 300;

        navbar.classList.toggle('scrolling-active', windowPosition);
        logo.classList.toggle('scrolling-logo-active', windowPosition);
    })

    return (
        <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img alt="logo" className="navbar-logo" href="#home" src={logo}></img>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto link_bundle">
                    <Nav.Link href="/">Overview</Nav.Link>
                    <Nav.Link href="/northern-lights-exterior">Exterior</Nav.Link>
                    <Nav.Link href="/northern-lights-interior">Interior</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.montanahomevacations.com/vacation-rental-home.asp?PageDataID=176424">Book Now</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;