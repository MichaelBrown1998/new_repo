function EmbedJSX() {
    const h1 = <h1>Header</h1>;
    const p = <p>This is some text in a paragraph.</p>;

    return (
        <div>
            {h1}
            {p}
            <p>This is a second paragraph.</p>
        </div>
    );
}

export default EmbedJSX;