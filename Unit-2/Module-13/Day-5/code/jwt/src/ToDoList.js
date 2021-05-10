import { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import Login from './Login';
import service from './service';

const emptyToDo = {
    id: 0,
    task: "",
    priority: 0,
    done: false
};

const Waiting = () => {
    return (
        <>
            <h1>ToDos</h1>
            <div className="alert alert-info">Waiting...</div>
        </>
    );
};

function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [scopedToDo, setScopedToDo] = useState(emptyToDo);
    const [showForm, setShowForm] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const [waiting, setWaiting] = useState(true);
    const [role, setRole] = useState("");

    useEffect(() => {
        service.getAll()
            .then(result => {
                setTodos(result);
                setWaiting(false);
            })
            .catch(console.log);
    }, []);

    function handleEdit(todo) {
        if (role === "ROLE_USER" || role === "ROLE_ADMIN") {
            setScopedToDo(todo || emptyToDo);
            setShowForm(true);
        } else {
            setLoginMessage("You must be a USER or ADMIN to add and update.");
            setShowLogin(true);
        }
    }

    function handleDelete(todo) {
        if (role === "ROLE_ADMIN") {
            setWaiting(true);
            service.remove(todo)
                .then(() => {
                    setTodos(todos.filter(td => td.id !== todo.id));
                })
                .catch(err => console.log(err))
                .finally(() => setWaiting(false));
        } else {
            setLoginMessage("You must be an ADMIN to delete.");
            setShowLogin(true);
        }
    }

    function login() {
        setLoginMessage("Log In.")
        setShowLogin(true);
    }

    function logout() {
        service.logout()
        setRole("");
    }

    function loginDone() {
        setShowLogin(false);
        setRole(service.role);
    }

    function add(todo) {
        service.add(todo)
            .then(result => setTodos([...todos, result]))
            .catch(console.log)
            .finally(() => setWaiting(false));
    }

    function update(todo) {
        service.update(todo)
            .then(() => {
                const clone = [...todos];
                const index = clone.findIndex(i => i.id === todo.id);
                if (index >= 0) {
                    clone.splice(index, 1, todo);
                    setTodos(clone);
                }
            })
            .catch(console.log)
            .finally(() => setWaiting(false));
    }

    function handleSubmit(todo) {
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

    let fragment;
    if (waiting) {
        fragment = <Waiting />;
    } else if (showForm) {
        fragment = <ToDoForm initialToDo={scopedToDo} onSubmit={handleSubmit} />;
    } else if (showLogin) {
        fragment = <Login message={loginMessage} service={service} done={loginDone} />;
    } else {
        fragment = (
            <>
                <div className="row mt-4">
                    <div className="col-8">
                        <h1>ToDos</h1>
                    </div>
                    <div className="col">
                        {(role === "ROLE_USER" || role === "ROLE_ADMIN") ?
                            <button className="btn btn-light mr-2" onClick={logout}>Log Out</button>
                            : <button className="btn btn-dark mr-2" onClick={login}>Log In</button>}
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
        );
    }

    return <main className="container">{fragment}</main>;

}

export default ToDoList;