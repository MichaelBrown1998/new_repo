import { useState } from 'react';

function MvpToDoWithDelete() {

    const [toDos, setToDos] = useState([]);
    const [nextToDo, setNextToDo] = useState("");

    const addToDo = () => {
        setToDos([...toDos, nextToDo]);
        setNextToDo("");
    };

    const remove = (todo) => {
        setToDos(toDos.filter(item => item !== todo));
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
                {toDos.map(toDo => {
                    return (
                        <li>
                            {toDo}
                            <button onClick={() => remove(toDo)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default MvpToDoWithDelete;