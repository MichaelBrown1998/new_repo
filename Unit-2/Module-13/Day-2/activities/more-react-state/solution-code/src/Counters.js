import { useState } from 'react';

function Counters() {

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    let message = "First Value and Second Value are equal.";
    if (first > second) {
        message = "First Value is greater than Second Value.";
    } else if (second > first) {
        message = "First Value is less than Second Value.";
    }


    return (
        <div>
            <div>
                <strong>First Value: {first}</strong>
            </div>
            <div>
                <button onClick={() => setFirst(first - 1)}>Decrease</button>
                <button onClick={() => setFirst(first + 1)}>Increase</button>
            </div>
            <div>
                <strong>Second Value: {second}</strong>
            </div>
            <div>
                <button onClick={() => setSecond(second - 1)}>Decrease</button>
                <button onClick={() => setSecond(second + 1)}>Increase</button>
            </div>
            <div>{message}</div>
        </div>
    );
}

export default Counters;