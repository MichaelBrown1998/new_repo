import { useState } from 'react';
function ToDoAdder({ add }) {
    // managing the state of the value in the input
    const [toDo, setToDo] = useState("");
    function handleClick() {
        // call callback function (passed in to this function)
        add(toDo);
        // clear out value of input
        setToDo("");
    }
    return (
        <div>
            <label htmlFor="nextToDo">ToDo</label>
            <input type="text" id="nextToDo"
                value={toDo} onChange={(evt) => setToDo(evt.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
export default ToDoAdder;