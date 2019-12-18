import React, {useState} from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {MdInfo, MdCode} from "react-icons/md";
import { FaReact } from "react-icons/fa";

function NavigationBar() {
    const [showModal, setModal] = useState(false);
    return (
        <>
            <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => setModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        About Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Cnvtr</strong> is a simple project created using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React<FaReact /></a> during my spare time.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <NavBar expand="lg" bg="dark" variant="dark" sticky="top">
                <NavBar.Brand><strong>Cnvtr</strong></NavBar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => setModal(true)} href=""><MdInfo /> About Project</Nav.Link>
                    <Nav.Link href="https://github.com/nurako/Cnvtr" target="_blank" rel="noopener noreferrer"><MdCode /> Source Code</Nav.Link>
                </Nav>
            </NavBar>
        </>
    );
}

export default NavigationBar;