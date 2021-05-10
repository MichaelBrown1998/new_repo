import { Component } from 'react';
import Book from './Book.js';
import BookForm from './BookForm.js';
import CardColumns from 'react-bootstrap/CardColumns';

const cookbooks = [
    { title: "Pizza Is Easy", description: "These pizzas might be easy, but they're not good.", likes: 0 },
    { title: "Just Fry It", description: "Delicious and greasy", likes: 0 },
    { title: "Fruit is Delicious", description: "It really is.", likes: 0 }
];

class Library extends Component {

    constructor() {
        super();
        this.state = {
            books: cookbooks,
            showAdd: false
        };

        this.like = this.like.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    like(title) {
        this.setState({
            books: this.state.books.map(book => {
                if (book.title === title) {
                    book.likes++;
                }
                return book;
            })
        });
    }

    remove(title) {
        this.setState({
            books: this.state.books.filter(b => b.title !== title)
        });
    }

    add() {
        this.setState({ showAdd: true })
    }

    handleSubmit(book) {
        this.setState({
            books: [...this.state.books, book],
            showAdd: false
        })
    }

    render() {

        if (this.state.showAdd) {
            const b = { title: "", description: "", likes: 0, isNew: true };
            return <BookForm initialBook={b} onSubmit={this.handleSubmit} />;
        }

        return (
            <div className="thin-border">
                <div className="row">
                    <div className="col-10">
                        <h2>Cookbooks</h2>
                    </div>
                    <div className="col mt-1">
                        <button className="btn btn-primary" onClick={this.add}>Add a Book</button>
                    </div>
                </div>
                <CardColumns>
                    {this.state.books.map(b => <Book book={b} onLike={this.like} onDelete={this.remove} />)}
                </CardColumns>
            </div>
        );
    }
}

export default Library;