import { useState } from 'react';

function AdjustFontSize() {

    const [fontSize, setFontSize] = useState("medium");

    return (
        <div>
            <select style={{ fontSize: fontSize }}
                value={fontSize} onChange={(evt) => setFontSize(evt.target.value)}>
                <option>xx-small</option>
                <option>x-small</option>
                <option>small</option>
                <option>medium</option>
                <option>large</option>
                <option>x-large</option>
                <option>xx-large</option>
            </select>
            <p style={{ fontSize: fontSize }}>Mithridatism is the practice of protecting oneself against a poison by gradually self-administering non-lethal amounts.
            The word is derived from Mithridates VI, the King of Pontus,
            who so feared being poisoned that he regularly ingested small doses, aiming to develop immunity.
            </p>
        </div>
    );

}

export default AdjustFontSize;