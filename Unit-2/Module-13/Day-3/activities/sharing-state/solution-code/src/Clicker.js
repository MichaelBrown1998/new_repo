import { useState } from 'react';

function Clicker({ total, onClick }) {

    const [clicks, setClicks] = useState(0);

    function handleClick() {
        setClicks(clicks + 1);
        onClick();
    }

    let percent = 0;
    if (total > 0) {
        percent = clicks / total * 100;
    }

    return (
        <div style={{ border: "1px solid #000", marginBottom: "7px" }}>
            <button onClick={handleClick}>Click</button>
            <p>
                Clicks from this Clicker: {clicks}
            </p>
            <p>
                Contribution: {percent.toFixed(2)}%
            </p>
        </div>
    );

}

export default Clicker;