import { useState } from 'react';

function BackgroundColor() {

    const [color, setColor] = useState("white");

    return (
        <div style={{ backgroundColor: color }}>
            <label htmlFor="color">Background Color</label>
            <select id="color" value={color} onChange={(evt) => setColor(evt.target.value)}>
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
                <option>yellow</option>
            </select>
        </div>
    );
}

export default BackgroundColor;