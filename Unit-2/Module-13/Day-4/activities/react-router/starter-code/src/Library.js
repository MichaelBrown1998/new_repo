import { useState } from 'react';
import Book from './Book.js';
import BookForm from './BookForm.js';
import CardColumns from 'react-bootstrap/CardColumns';

const cookbooks = [
    { title: "Pizza Is Easy", description: "These pizzas might be easy, but they're not good.", likes: 0 },
    { title: "Just Fry It", description: "Delicious and greasy", likes: 0 },
    { title: "Fruit is Delicious", description: "It really is.", likes: 0 }
];

function Library() {

    const [books, setBooks] = useState(cookbooks);
    const [showAdd, setShowAdd] = useState(false);

    function like(title) {
        setBooks(books.map(book => {
            if (book.title === title) {
                book.likes++;
            }
            return book;
        }));
    }

    function remove(title) {
        setBooks(books.filter(b => b.title !== title));
    }

    function add() {
        setShowAdd(true);
    }

    function handleSubmit(book) {
        setBooks([...books, book]);
        setShowAdd(false);
    }

    if (showAdd) {
        const b = { title: "", description: "", likes: 0, isNew: true };
        return <BookForm initialBook={b} onSubmit={handleSubmit} />;
    }

    return (
        <div className="thin-border">
            <div className="row">
                <div className="col-10">
                    <h2>Cookbooks</h2>
                </div>
                <div className="col mt-1">
                    <button className="btn btn-primary" onClick={add}>Add a Book</button>
                </div>
            </div>
            <CardColumns>
                {books.map(b => <Book key={b.title} book={b} onLike={like} onDelete={remove} />)}
            </CardColumns>
        </div>
    );
}

export default Library;