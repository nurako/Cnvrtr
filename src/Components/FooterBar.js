import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import {TiHeartOutline} from "react-icons/ti";
import { FaReact } from "react-icons/fa";

function FooterBar() {
    return (   
        <NavBar expand="lg" bg="dark" variant="dark" sticky="bottom">
            <p className="mx-auto align-middle text-muted">Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact /></a> and without <a href="https://www.youtube.com/watch?v=3rzgrP7VA_Q" target="_blank" rel="noopener noreferrer"><TiHeartOutline /></a></p>
        </NavBar>
    );
}

export default FooterBar;