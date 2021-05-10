import Book from './Book.js';

function Library({ name, books }) {
    return (
        <div>
            <h2>{name}</h2>
            {books.map(b => <Book title={b.title} description={b.description} />)}
        </div>
    );
}

export default Library;