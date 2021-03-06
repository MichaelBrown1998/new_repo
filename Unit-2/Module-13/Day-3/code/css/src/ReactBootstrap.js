// required at least once
import 'bootstrap/dist/css/bootstrap.css';
// import individual components
import { Alert, Button, Col, Container, Row }
    from 'react-bootstrap';

function ReactBootstrap() {
    return (
        <Container>
            <h1>Bees</h1>
            <Row>
                <Col lg="4">Bumblebee</Col>
                <Col lg="4">Mason bee</Col>
                <Col lg="4">Carpenter bee</Col>
                <Col lg="4">Leafcutter bee</Col>
                <Col lg="4">Sweat bee</Col>
            </Row>
            <Alert variant="danger">Bees!</Alert>
            <Button variant="primary">Click Me</Button>
        </Container>
    );
}

export default ReactBootstrap;