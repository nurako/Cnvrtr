import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function MainContent() {
    return (
        <Container className="mt-4">
            <Jumbotron className="text-center">
                <h1>Hey there!</h1>
                <p className="mt-3">
                    This is a simple app to get exchange rates on your favorite cryptocurrencies.
                </p>
            </Jumbotron>
        </Container>
    );
}

export default MainContent;