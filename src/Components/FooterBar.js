import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import {TiHeartOutline} from "react-icons/ti";
import { FaReact } from "react-icons/fa";

function FooterBar() {
    return (   
        <NavBar expand="lg" bg="dark" variant="dark" sticky="bottom">
            <p className="mx-auto align-middle text-muted mt-1">Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact /></a> and without <a href="https://www.youtube.com/watch?v=3rzgrP7VA_Q" target="_blank" rel="noopener noreferrer"><TiHeartOutline /></a></p>
            <p className ="mx-auto align-middle mt-2"><img class = "mx-auto" src="https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg" alt=" "/></p>
        </NavBar>
    );
}

export default FooterBar;