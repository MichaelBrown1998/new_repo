import { Component } from 'react';
import ToDoForm from './ToDoForm';

const emptyToDo = {
    id: 0,
    task: "",
    priority: 0,
    done: false
};

class ToDoList extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            scopedToDo: emptyToDo,
            showForm: false,
            waiting: true
        };
        this.handleForm = this.handleForm.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/todo")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    todos: result,
                    waiting: false
                });
            })
            .catch(console.log);
    }

    handleAdd() {
        this.setState({
            scopedToDo: emptyToDo,
            showForm: true
        });
    }

    handleEdit(todo) {
        this.setState({
            scopedToDo: todo,
            showForm: true
        });
    }

    handleDelete(todo) {
        this.setState({ waiting: true });
        fetch(`http://localhost:8080/api/todo/${todo.id}`, { method: "DELETE" })
            .then(() => {
                this.setState({ todos: this.state.todos.filter(td => td.id !== todo.id) });
            })
            .catch(console.log)
            .finally(() => this.setState({ waiting: false }));
    }

    add(todo) {

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
            .then(result => this.setState({ todos: [...this.state.todos, result] }))
            .catch(console.log)
            .finally(() => this.setState({ waiting: false }));
    }

    update(todo) {

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
                    const clone = [...this.state.todos];
                    const index = clone.findIndex(i => i.id === todo.id);
                    if (index >= 0) {
                        clone.splice(index, 1, todo);
                        this.setState({ todos: clone })
                    }
                }
                return Promise.reject();
            })
            .catch(console.log)
            .finally(() => this.setState({ waiting: false }));
    }

    handleForm(todo) {
        this.setState({ showForm: false });
        if (!todo) {
            return;
        }
        this.setState({ waiting: true });
        if (todo.id === 0) {
            this.add(todo);
        } else {
            this.update(todo);
        }
    }

    render() {

        if (this.state.waiting) {
            return (
                <>
                    <h1>ToDos</h1>
                    <div className="alert alert-info">Waiting...</div>
                </>
            );
        } else if (this.state.showForm) {
            return <ToDoForm initialToDo={this.state.scopedToDo} onSubmit={this.handleForm} />;
        }

        return (
            <>
                <div className="row mt-4">
                    <div className="col-10">
                        <h1>ToDos</h1>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={() => this.handleAdd()}>Add a ToDo</button>
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
                        {this.state.todos.sort((a, b) => b.priority - a.priority)
                            .map(td => {
                                return (
                                    <tr key={td.id}>
                                        <td>{td.task}</td>
                                        <td>{td.priority}</td>
                                        <td>{td.done ? "\u2714" : "\u2b55"}</td>
                                        <td>
                                            <button className="btn btn-danger mr-2" onClick={() => this.handleDelete(td)}>Delete</button>
                                            <button className="btn btn-secondary" onClick={() => this.handleEdit(td)}>Edit</button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default ToDoList;