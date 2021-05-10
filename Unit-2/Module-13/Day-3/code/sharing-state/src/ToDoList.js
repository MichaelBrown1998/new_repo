import { useState } from 'react';
import ToDoAdder from './ToDoAdder.js';
import ToDo from './ToDo.js';
function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const addToDo = (toDo) => {
        // PLEASE DO NOT CHANGE THE VALUE OF A STATE ARRAY OR OBJECT DIRECTLY
        // THIS IS THE WRONG THING TO DO:
        // toDos.push(toDo); setToDos(toDos);
        setToDos([...toDos, toDo]);
    };
    const remove = (todo) => {
        setToDos(toDos.filter(item => item !== todo));
    };
    return (
        <section>
            <ToDoAdder add={addToDo} />
            {toDos.map(thingInMyList => <ToDo toDo={thingInMyList} remove={remove} />)}
        </section>
    );
}
export default ToDoList;