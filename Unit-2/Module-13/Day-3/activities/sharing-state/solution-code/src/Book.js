function Book({ book, onLike, onDelete }) {

    const { title, description, likes } = book;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                Likes: {likes}
            </div>
            <div>
                <button onClick={() => onLike(title)}>Like</button>
            </div>
            <div>
                <button onClick={() => onDelete(title)}>Delete</button>
            </div>
        </div>
    );
}

export default Book;