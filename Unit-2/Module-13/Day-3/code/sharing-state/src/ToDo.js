function ToDo({ toDo, remove }) {
    return (
        <li>
            {toDo}
            <button onClick={() => remove(toDo)}>Delete</button>
        </li>
    );
}
export default ToDo;