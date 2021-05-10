import { useState } from 'react';

function Echoes() {

    const [phrase, setPhrase] = useState("");
    const [repetitions, setRepetitions] = useState(1);

    const handleRepetitions = (evt) => {
        const n = parseInt(evt.target.value, 10);
        if (!isNaN(n)) {
            setRepetitions(n);
        }
    };

    let jsx = <div>Nothing to display.</div>
    if (repetitions > 0) {
        jsx = <ul>
            {Array.from({ length: repetitions }, (_, i) => i)
                .map(i => <li>{phrase}</li>)}
        </ul>;
    }

    return (
        <div>
            <div>
                <label htmlFor="phrase">Phrase</label>
                <input type="text" id="phrase"
                    value={phrase} onChange={evt => setPhrase(evt.target.value)} />
                <label htmlFor="repetitions">Repetitions</label>
                <input type="number" id="repetitions"
                    value={repetitions} onChange={handleRepetitions} />
            </div>
            {jsx}
        </div>
    );
}

export default Echoes;