function SynchronizedText({ text, onChange }) {

    return (
        <div>
            <input value={text} onChange={(evt) => onChange(evt.target.value)} />
        </div>
    );
}

export default SynchronizedText;