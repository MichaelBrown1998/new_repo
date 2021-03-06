function Leaf({ treeType, onChange, style }) {
    return (
        <div style={style}>
            <h3>Leaf</h3>
            <select value={treeType} onChange={(evt) => onChange(evt.target.value)}>
                <option value="pine">Pine</option>
                <option value="walnut">Walnut</option>
                <option value="spruce">Spruce</option>
                <option value="oak">Oak</option>
                <option value="maple">Maple</option>
            </select>
        </div>
    );
}

export default Leaf;