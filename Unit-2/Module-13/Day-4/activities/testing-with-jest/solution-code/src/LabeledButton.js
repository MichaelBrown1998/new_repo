import { useState } from 'react';

function LabeledButton({ label }) {

    const [clicks, setClicks] = useState(0);

    return (
        <>
            <h4>{label}</h4>
            <button onClick={() => setClicks(clicks + 1)}>Click</button>
            <span>{clicks}</span>
        </>
    );
}

export default LabeledButton;