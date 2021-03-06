import { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';

const emptyToDo = {
    id: 0,
    task: "",
    priority: 0,
    done: false
};

function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [scopedToDo, setScopedToDo] = useState(emptyToDo);
    const [showForm, setShowForm] = useState(false);
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/todo")
            .then(response => response.json())
            .then(result => {
                setTodos(result);
                setWaiting(false);
            })
            .catch(console.log);
    }, []);

    function handleEdit(todo) {
        setScopedToDo(todo || emptyToDo);
        setShowForm(true);
    }

    function handleDelete(todo) {
        setWaiting(true);
        fetch(`http://localhost:8080/api/todo/${todo.id}`, { method: "DELETE" })
            .then(() => {
                setTodos(todos.filter(td => td.id !== todo.id));
            })
            .catch(console.log)
            .finally(() => setWaiting(false));
    }

    function add(todo) {

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(todo)
        };

        fetch("http://localhost:8080/api/todo", init)
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                }
                // could check other statuses...
                return Promise.reject("ToDo was not created.");
            })
            .then(result => setTodos([...todos, result]))
            .catch(console.log)
            .finally(() => setWaiting(false));
    }

    function update(todo) {

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(todo)
        };

        fetch(`http://localhost:8080/api/todo/${todo.id}`, init)
            .then(response => {
                if (response.status === 204) {
                    const clone = [...todos];
                    const index = clone.findIndex(i => i.id === todo.id);
                    if (index >= 0) {
                        clone.splice(index, 1, todo);
                        setTodos(clone);
                    }
                }
                return Promise.reject();
            })
            .catch(console.log)
            .finally(() => setWaiting(false));
    }

    function handleForm(todo) {
        setShowForm(false);
        if (!todo) {
            return;
        }
        setWaiting(true);
        if (todo.id === 0) {
            add(todo);
        } else {
            update(todo);
        }
    }

    if (waiting) {
        return (
            <>
                <h1>ToDos</h1>
                <div className="alert alert-info">Waiting...</div>
            </>
        );
    } else if (showForm) {
        return <ToDoForm initialToDo={scopedToDo} onSubmit={handleForm} />;
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-10">
                    <h1>ToDos</h1>
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={() => handleEdit()}>Add a ToDo</button>
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
                    {todos.sort((a, b) => b.priority - a.priority)
                        .map(td => {
                            return (
                                <tr key={td.id}>
                                    <td>{td.task}</td>
                                    <td>{td.priority}</td>
                                    <td>{td.done ? "\u2714" : "\u2b55"}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2" onClick={() => handleDelete(td)}>Delete</button>
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