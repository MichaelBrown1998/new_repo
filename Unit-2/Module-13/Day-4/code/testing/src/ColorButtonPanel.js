import { useState } from 'react';
import ColorButton from './ColorButton.js';

function ColorButtonPanel() {

    const [color, setColor] = useState("white");

    const callback = (value) => setColor(value);

    return (
        <div style={{ backgroundColor: color, minHeight: "500px", display: "flex" }}>
            <ColorButton color="red" onClick={callback} currentColor={color} />
            <ColorButton color="blue" onClick={callback} currentColor={color} />
            <ColorButton color="yellow" onClick={callback} currentColor={color} />
        </div>
    );
}

export default ColorButtonPanel;