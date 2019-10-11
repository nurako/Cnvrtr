import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Selection from './Selection';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table';
import { IoMdSwap } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";

function MainContent() {
    const [showAlert, setAlert] = useState(false);
    const [showModal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    let change;
    const checkValidity = (e) => {
        if(isNaN(e.value))
            return false;
        return true;
    };
    const handleFormClick = (e) => {
        e.preventDefault();
    };
    const handleSwap = () => {
        const currency1 = document.getElementById('Select1').value;
        const currency2 = document.getElementById('Select2').value;
        if (currency1 === currency2) {
            setModal(true);
        }
        else {
            document.getElementById('Select1').value = currency2;
            document.getElementById('Select2').value = currency1;
        }
    }
    const handleClick = (e) => {
        if(!checkValidity) {
            alert("Please enter a numerical value in the amount field");
        }
        else {
            setLoaded(false);
            setLoading(true);
            const currency1 = document.getElementById('Select1').value;
            const currency2 = document.getElementById('Select2').value;
            if (currency1 === currency2) {
                setModal(true);
            }
            else {
                const axios = require('axios');
                axios.get(`https://api.cryptonator.com/api/ticker/${currency1}-${currency2}`)
                    .then(function (response) {
                        if (response.data.error !== "")
                            throw response;
                        else {
                            setLoaded(true);
                            const amount =  parseFloat(document.getElementById("Am").value);
                            document.getElementById("C1").innerText = `${response.data.ticker.base}`;
                            document.getElementById("C2").innerText = `${response.data.ticker.target}`;
                            document.getElementById("Cv1").innerText = 1 * amount;
                            document.getElementById("Cv2").innerText = response.data.ticker.price * amount;
                            document.getElementById("CH").innerText = response.data.ticker.change;
                            change = (response.data.ticker.change > 0) ? true : false;
                            console.log(`1  -> ${response.data.ticker.price} (Change : ${response.data.ticker.change})`);
                        }
                    })
                    .catch(function (error) {
                        setAlert(true);
                        console.log(error);
                    })
                    .finally(function () {
                        setLoading(false);
                    });
            }
        }
        e.preventDefault();
    };
    return (
        <Container className="mb-5">
            <Alert className="text-center" show={showAlert} variant="danger" onClose={() => setAlert(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error! Try that again</Alert.Heading>
            </Alert>
            <Modal show={showModal} onHide={() => setModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Oops</Modal.Title>
                </Modal.Header>
                <Modal.Body>Looks like you choose to the same currency in both the selections. Please choose different currencies.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Jumbotron className="text-center">
                <Form className="w-75 mx-auto" onSubmit={handleFormClick}>
                    <Form.Row>
                        <Col><h4><strong>Convert</strong></h4></Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className="col-md-3 mx-auto">
                            <Form.Group controlId="Am">
                                <Form.Label><h5><strong>Amount</strong></h5></Form.Label>
                                <Form.Control as="input" defaultValue="1"/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="Select1">
                                <Form.Label><h5><strong>From</strong></h5></Form.Label>
                                <Selection />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <br />
                                <OverlayTrigger overlay={<Tooltip>Swap currencies</Tooltip>}>
                                    <Button onClick={handleSwap}><IoMdSwap /></Button>
                                </OverlayTrigger>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Select2">
                                <Form.Label><h5><strong>To</strong></h5></Form.Label>
                                <Selection />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                                {isLoading ? 'Loading…' : 'Convert'}
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                <Collapse in={isLoaded}>
                    <Table striped bordered hover variant="dark" className="mx-auto w-50 mt-3">
                        <thead>
                            <tr>
                                <th><span id="C1"></span></th>
                                <th><IoMdArrowRoundForward /></th>
                                <th><span id="C2"></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span id="Cv1"></span></td>
                                <td><IoMdArrowRoundForward /></td>
                                <td><span id="Cv2"></span></td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    Change(last hour) : <span id="CH"></span>{' '}{change?<IoMdArrowRoundUp /> : <IoMdArrowRoundDown />}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Collapse>
            </Jumbotron>
        </Container>
    );
}

export default MainContent;