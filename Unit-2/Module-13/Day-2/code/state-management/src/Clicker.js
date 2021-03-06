import { useState } from 'react';

function Clicker() {

    const [clicks, setClicks] = useState(0);
    const [lastUpdated, setLastUpdated] = useState("No Updates");

    const update = () => {
        setClicks(clicks + 1);
        setLastUpdated(new Date().toLocaleString());
    };

    return (
        <div>
            <button onClick={update}>
                Clicks: {clicks}
            </button>
            <p>
                Last Updated: {lastUpdated}
            </p>
        </div>
    );
}

export default Clicker;