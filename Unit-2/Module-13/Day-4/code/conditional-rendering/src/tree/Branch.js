import Leaf from './Leaf.js';

function Branch({ treeType, onChange, style }) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Leaf treeType={treeType} onChange={onChange} style={style} />
                <Leaf treeType={treeType} onChange={onChange} style={style} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={style}>
                    <h2>Branch</h2>
                    {treeType}
                </div>
            </div>
        </div>
    );
}

export default Branch;