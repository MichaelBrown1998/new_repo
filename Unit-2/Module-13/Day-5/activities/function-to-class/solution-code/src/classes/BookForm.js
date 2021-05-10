import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class BookForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: { ...props.initialBook }
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(evt) {
        const value = evt.target.type === "number" ?
            parseInt(evt.target.value, 10) || 0 : evt.target.value;
        const clone = { ...this.state.book };
        clone[evt.target.name] = value;
        this.setState({ book: clone });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.state.book);
    }

    render() {

        const book = this.state.book;

        return (
            <>
                <h1>{book.isNew ? "Add" : "Edit"} a Book</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title"
                            value={book.title} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description"
                            value={book.description} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="likes">
                        <Form.Label>Likes</Form.Label>
                        <Form.Control type="number" name="likes"
                            value={book.likes} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Save</Button>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default BookForm;