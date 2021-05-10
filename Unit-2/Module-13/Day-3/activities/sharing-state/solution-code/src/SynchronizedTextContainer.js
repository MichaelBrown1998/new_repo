import { useState } from 'react';
import SynchronizedText from './SynchronizedText.js';

function SynchronizedTextContainer() {

    const [text, setText] = useState("grasshopper");

    return (
        <div>
            <h1>{text}</h1>
            <SynchronizedText text={text} onChange={setText} />
            <SynchronizedText text={text} onChange={setText} />
            <SynchronizedText text={text} onChange={setText} />
            <SynchronizedText text={text} onChange={setText} />
        </div>
    );
}

export default SynchronizedTextContainer;