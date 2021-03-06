import { useState } from 'react';

function Values() {

    const [values, setValues] = useState([]);

    const handleEnter = (evt) => {
        if (evt.key === "Enter") {
            setValues([...values, evt.target.value]);
        }
    };

    return (
        <div>
            <p>Enter a value and press <kbd>Enter</kbd>.</p>
            <input type="text" onKeyUp={handleEnter} />
            <ul>
                {values.map(n => <li>{n}</li>)}
            </ul>
        </div>
    );
}

export default Values;