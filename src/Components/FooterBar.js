import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function FooterBar() {
    return (   
        <NavBar expand="lg" bg="dark" variant="dark" sticky="bottom">
            <Nav.Link className="mx-auto" eventKey="disabled" disabled>
                Made with <a href="https://reactjs.org/">React</a> and without <span role="img" aria-label="heart">❤️</span>
            </Nav.Link>
        </NavBar>
    );
}

export default FooterBar;