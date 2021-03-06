import { useState } from 'react';

function MvpToDo() {

    const [toDos, setToDos] = useState([]);
    const [nextToDo, setNextToDo] = useState("");

    const addToDo = () => {
        setToDos([...toDos, nextToDo]);
        setNextToDo("");
    };

    return (
        <section>
            <div>
                <label htmlFor="nextToDo">ToDo</label>
                <input type="text" id="nextToDo"
                    value={nextToDo} onChange={(evt) => setNextToDo(evt.target.value)} />
                <button onClick={addToDo}>Add</button>
            </div>
            <ul>
                {toDos.map(toDo => <li>{toDo}</li>)}
            </ul>
        </section>
    );
}

export default MvpToDo;