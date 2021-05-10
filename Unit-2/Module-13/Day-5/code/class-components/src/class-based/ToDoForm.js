import { Component } from 'react';

class ToDoForm extends Component {

    constructor(props) {
        super(props);
        this.state = { ...props.initialToDo };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        let value = evt.target.value;
        if (evt.target.type === "checkbox") {
            value = evt.target.checked;
        } else if (evt.target.type === "number") {
            value = parseInt(value, 10);
            if (isNaN(value)) {
                value = 0;
            }
        }
        const clone = { ...this.state };
        clone[evt.target.name] = value;
        this.setState({ ...clone });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <>
                <h1>Add a ToDo</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="task">Task</label>
                        <input type="text" id="task" name="task"
                            className="form-control"
                            value={this.state.task} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="priority">Priority</label>
                        <input type="number" id="priority" name="priority"
                            className="form-control"
                            value={this.state.priority} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                id="done" name="done"
                                checked={this.state.done} onChange={this.handleChange} />
                            <label className="form-check-label" htmlFor="done">
                                Complete
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </>
        );
    }
}

export default ToDoForm;