import React,{useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Selection from './Selection';
import Modal from 'react-bootstrap/Modal';

function MainContent() {
    const [showAlert, setAlert] = useState(false);
    const [showModal, setModal] = useState(false);
    const handleClick = (e) => {
        const currency1 = document.getElementById('Select1').value;
        const currency2 = document.getElementById('Select2').value;
        if(currency1 === currency2) {
            setModal(true);
        }
        else {
            const axios = require('axios');
            axios.get(`https://api.cryptonator.com/api/ticker/${currency1}-${currency2}`)
            .then(function (response) {
                if(response.data.error !== "")
                    throw response;
                else {
                    document.getElementById("Currencies").innerText = `${response.data.ticker.base} -> ${response.data.ticker.target}`;
                    document.getElementById("CurrencyValues").innerText = `1  -> ${response.data.ticker.price} (Change : ${response.data.ticker.change})`;                    
                    console.log(`1  -> ${response.data.ticker.price} (Change : ${response.data.ticker.change})`);
                }
                console.log(response.data);
            })
            .catch(function (error) {
                setAlert(true)
                console.log(error);
            });
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
                <Form onSubmit={handleClick}>
                    <Form.Row>
                        <Col>
                            <p>Convert</p>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>  
                            <Form.Group controlId="Select1">
                                <Form.Label>From</Form.Label>
                                <Selection />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Select2">
                                <Form.Label>To </Form.Label>
                                <Selection />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button variant="primary" type="submit">Convert</Button>
                        </Col>
                    </Form.Row>
                </Form>
                <div className="mt-3">
                    <h3 id="Currencies"> </h3>
                    <h4 id="CurrencyValues"> </h4>
                </div>
            </Jumbotron>
        </Container>
    );
}

export default MainContent;