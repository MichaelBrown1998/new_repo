import { useState } from 'react';
import Book from './Book.js';

const cookbooks = [
    { title: "Pizza Is Easy", description: "These pizzas might be easy, but they're not good.", likes: 0 },
    { title: "Just Fry It", description: "Delicious and greasy", likes: 0 },
    { title: "Fruit is Delicious", description: "It really is.", likes: 0 }
];

function Library() {

    const [books, setBooks] = useState(cookbooks);

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

    return (
        <div>
            <h2>Cookbooks</h2>
            {books.map(b => <Book book={b} onLike={like} onDelete={remove} />)}
        </div>
    );
}

export default Library;