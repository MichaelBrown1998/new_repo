import { useState } from 'react';
import Clicker from './Clicker.js';

function ClickerParent() {
    const [clicks, setClicks] = useState(0);

    function onClick() {
        setClicks(clicks + 1);
    }

    return (
        <div>
            <h1>Total Clicks: {clicks}</h1>
            <Clicker total={clicks} onClick={onClick} />
            <Clicker total={clicks} onClick={onClick} />
            <Clicker total={clicks} onClick={onClick} />
            <Clicker total={clicks} onClick={onClick} />

        </div>
    )
}

export default ClickerParent;