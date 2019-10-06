import React from 'react';
import NavBar from 'react-bootstrap/Navbar';

function FooterBar() {
    return (   
        <NavBar expand="lg" bg="dark" variant="dark" sticky="bottom">
            <p className="mx-auto align-middle text-muted">Made with <a href="https://reactjs.org/">React</a> and without <span role="img" aria-label="heart">❤️</span></p>
        </NavBar>
    );
}

export default FooterBar;