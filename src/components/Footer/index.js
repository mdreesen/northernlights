import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

const Footer = () => {

    return (
        <Navbar className="footer" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="footer_sections">
                    <div className="footer_section_one">
                        <p className="footer_text">Contact Us</p>
                        <div className="footer_text_content">
                            <p>913 Wisconsin Ave., Suite 104</p>
                            <p>Whitefish, MT 59937</p>
                        </div>
                        <div className="footer_text_copyright_container">
                            <p className="footer_text_copyright ">© 2021 | Montana Home Vacations All rights reserved</p>
                        </div>
                    </div>
                    <div className="footer_section_two">
                        <p className="footer_text">About Us</p>
                        <div className="footer_text_content">
                            <p>Montana Home Vacations is led by a team of locals with a shared vision for bringing a boutique-level vacation experience to the Whitefish area. The unique commitment of Montana Home Vacations is to provide the highest level of service to just 20 destination homes - creating an exclusive group of properties that offer an unparalleled array of guest and owner services.</p>
                        </div>
                    </div>
                    <div className="footer_section_three">
                        <p className="footer_text">About Us</p>
                        <div className="footer_text_content_three">
                            <a className="footer_link" href="https://www.montanahomevacations.com/testimonials.asp">Guest Reviews</a>
                            <a className="footer_link" href="https://www.montanahomevacations.com/contact-information.asp">Contact Us</a>
                            <a className="footer_link" href="https://www.montanahomevacations.com/property-management.htm">Property</a>
                            <a className="footer_link" href="https://www.montanahomevacations.com/property-management.htm">Management</a>
                            <a className="footer_link" href="https://reservations.liverez.com/owners/login.asp?logoff=True">Owner Login</a>
                        </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;