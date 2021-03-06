import { useState } from 'react';
import Branch from './Branch.js';

const style = {
    borderRadius: "10px",
    border: "1px solid #000",
    textAlign: "center",
    width: "175px",
    margin: "0px 5px 5px 0px",
    paddingBottom: "1.1em"
};

function Root() {

    const [treeType, setTreeType] = useState("pine");

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Branch treeType={treeType} onChange={setTreeType} style={style} />
                <Branch treeType={treeType} onChange={setTreeType} style={style} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={style}>
                    <h1>Root</h1>
                    {treeType}
                </div>
            </div>
        </div>
    );
}

export default Root;