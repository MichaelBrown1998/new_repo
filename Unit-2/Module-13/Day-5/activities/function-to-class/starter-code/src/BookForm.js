import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function BookForm({ initialBook, onSubmit }) {

    const [book, setBook] = useState({ ...initialBook });

    function onChange(evt) {
        const value = evt.target.type === "number" ?
            parseInt(evt.target.value, 10) : evt.target.value;
        const clone = { ...book };
        clone[evt.target.name] = value;
        setBook(clone);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(book);
    }

    return (
        <>
            <h1>{book.isNew ? "Add" : "Edit"} a Book</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title"
                        value={book.title} onChange={onChange} />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description"
                        value={book.description} onChange={onChange} />
                </Form.Group>
                <Form.Group controlId="likes">
                    <Form.Label>Likes</Form.Label>
                    <Form.Control type="number" name="likes"
                        value={book.likes} onChange={onChange} />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Save</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default BookForm;