import { useState } from 'react';

function ToDoForm({ initialToDo, onSubmit }) {

    // Privately track our own instance of a ToDo.
    const [toDo, setToDo] = useState({ ...initialToDo });

    // One handler for all controlled components.
    function handleChange(evt) {
        let value = evt.target.value;
        if (evt.target.type === "checkbox") {
            value = evt.target.checked;
        } else if (evt.target.type === "number") {
            value = parseInt(value, 10);
        }
        const clone = { ...toDo };
        clone[evt.target.name] = value;
        setToDo(clone);
    }

    // Cancel submit and execute the parent's callback.
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(toDo);
    }

    return (
        <>
            <h1>Add a ToDo</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="task">Task</label>
                    {/* Controlled component  */}
                    <input type="text" id="task" name="task"
                        className="form-control"
                        value={toDo.task} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="priority">Priority</label>
                    {/* Controlled component  */}
                    <input type="number" id="priority" name="priority"
                        className="form-control"
                        value={toDo.priority} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        {/* Controlled component  */}
                        <input className="form-check-input" type="checkbox"
                            id="done" name="done"
                            checked={toDo.done} onChange={handleChange} />
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

export default ToDoForm;