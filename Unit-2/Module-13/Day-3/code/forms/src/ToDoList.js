import { useState } from 'react';
import ToDoForm from './ToDoForm';

// Used to initialize state and 
// for adding a ToDo in ToDoForm.
const emptyToDo = {
    id: 0,
    task: "",
    priority: 0,
    done: false
};

// Determines the next ToDo id.
function getMaxToDoId(todos) {
    if (todos.length === 0) {
        return 1;
    }
    return Math.max(...todos.map(i => i.id)) + 1;
}

function ToDoList() {

    // ToDoList tracks an array of ToDos, the ToDo currently in-scope, 
    // and a boolean that conditionally renders the form.
    const [todos, setTodos] = useState([]);
    const [scopedToDo, setScopedToDo] = useState(emptyToDo);
    const [showForm, setShowForm] = useState(false);

    // Event handlers which may also be callbacks.
    function handleAdd() {
        setScopedToDo(emptyToDo);
        setShowForm(true);
    }

    function handleEdit(todo) {
        setScopedToDo(todo);
        setShowForm(true);
    }

    function handleDelete(todo) {
        setTodos(todos.filter(td => td.id !== todo.id));
    }

    // Callback
    function handleForm(todo) {
        if (todo.id === 0) {
            todo.id = getMaxToDoId(todos);
            setTodos([...todos, todo]);
        } else {
            const clone = [...todos];
            const index = clone.findIndex(i => i.id === todo.id);
            if (index >= 0) {
                clone.splice(index, 1, todo);
                setTodos(clone);
            }
        }
        setShowForm(false);
    }

    // Conditional components
    if (showForm) {
        // Pass `handleForm` to ToDoForm.
        return <ToDoForm initialToDo={scopedToDo} onSubmit={handleForm} />;
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-10">
                    <h1>ToDos</h1>
                </div>
                <div className="col">
                    {/* handleAdd scopes an empty ToDo and shows the ToDoForm.  */}
                    <button className="btn btn-primary" onClick={handleAdd}>Add a ToDo</button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Complete</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map ToDos to table rows. */}
                    {todos.sort((a, b) => b.priority - a.priority)
                        .map(td => {
                            return (
                                <tr key={td.id}>
                                    <td>{td.task}</td>
                                    <td>{td.priority}</td>
                                    <td>{td.done ? "\u2714" : "\u2b55"}</td> {/* Unicode X and check. */}
                                    <td>
                                        <button className="btn btn-danger mr-2" onClick={() => handleDelete(td)}>Delete</button>
                                        {/* handleEdit scopes this ToDo and shows the ToDoForm.  */}
                                        <button className="btn btn-secondary" onClick={() => handleEdit(td)}>Edit</button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    )
}

export default ToDoList;