function EmbedExpression() {
    const phrase = "I'm melting...";
    return (
        <div>
            <div>Two times PI: {Math.PI * 2}</div>
            <div>{phrase.substring(0)}</div>
            <div>{phrase.substring(1)}</div>
            <div>{phrase.substring(2)}</div>
            <div>{phrase.substring(3)}</div>
            <div>{phrase.substring(4)}</div>
            <div>{phrase.substring(5)}</div>
            <div>{phrase.substring(6)}</div>
        </div>
    );
}

export default EmbedExpression;