import { Button, Card, Col, Row } from 'react-bootstrap';

function Book({ book, onLike, onDelete }) {

    const { title, description, likes } = book;

    return (
        <Card>
            <Card.Header>
                <h3>{title}</h3>
            </Card.Header>
            <Card.Body>
                {description}
                <div>
                    Likes: {likes}
                </div>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={() => onLike(title)}>Like</Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={() => onDelete(title)}>Delete</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default Book;