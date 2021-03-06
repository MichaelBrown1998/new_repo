function ColorButton({ color = "red", onClick, currentColor }) {

    return (
        <div style={{ marginRight: "15px" }}>
            <button style={{ backgroundColor: color }} onClick={() => onClick(color)}>
                {color.toUpperCase()}
            </button>
            <div>
                <strong>Current Color: </strong> {currentColor}
            </div>
        </div>
    );
}

export default ColorButton;