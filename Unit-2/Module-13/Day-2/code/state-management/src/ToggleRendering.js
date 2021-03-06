import { useState } from 'react';

function ToggleRendering() {

    const [toggled, setToggled] = useState(false);

    return (
        <div>
            <label htmlFor="toggle">Toggle</label>
            <input type="checkbox" id="toggle"
                checked={toggled} onChange={(evt) => setToggled(evt.target.checked)} />
            {toggled ? <h1 style={{ backgroundColor: "green", height: "500px" }}>On</h1>
                : <h1 style={{ backgroundColor: "red" }}>Off</h1>}
        </div>
    );
}

export default ToggleRendering;