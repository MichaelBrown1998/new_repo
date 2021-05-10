function ColorButton({ color = "red" }) {
    return (
        <button style={{ backgroundColor: color }}>
            {color.toUpperCase()}
        </button>
    );
}

export default ColorButton;