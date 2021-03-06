import { useState } from 'react';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';

function MakingToast() {

    const [toastIsUp, setToastIsUp] = useState(false);

    return (
        <Container>
            <h1>Making Toast</h1>
            <Row>
                <Col>
                    <Button variant="primary" onClick={() => setToastIsUp(true)}>Hey</Button>
                </Col>
                <Col>
                    <Toast show={toastIsUp} onClose={() => setToastIsUp(false)} autohide={true}>
                        <Toast.Header>
                            <h2>Hey!</h2>
                        </Toast.Header>
                        <Toast.Body>
                            <p>Here's some toast.</p>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    );
}

export default MakingToast;