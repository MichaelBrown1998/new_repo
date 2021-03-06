// ToDoForm.test.js
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoForm from './ToDoForm.js';

test("should submit", () => {

    const submit = jest.fn();
    const initial = {
        task: "Wash clothes",
        priority: 7,
        done: false
    };

    render(<ToDoForm initialToDo={initial} onSubmit={submit} />);
    const task = document.getElementById("task");
    const button = document.querySelector('button[type="submit"]');

    expect(task.value).toBe("Wash clothes");

    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(submit).toBeCalled();
    expect(submit.mock.calls[0][0]).toMatchObject(initial);
});

test("should fill out form", () => {

    const submit = jest.fn();

    render(<ToDoForm initialToDo={{
        task: "",
        priority: 0,
        done: false
    }} onSubmit={submit} />);

    const task = document.getElementById("task");
    const priority = document.getElementById("priority");
    const done = document.getElementById("done");
    const button = document.querySelector('button[type="submit"]');

    userEvent.type(task, "Do the dishes");
    userEvent.type(priority, "{backspace}9");
    userEvent.click(done);
    userEvent.click(button);

    expect(submit).toBeCalled();

    const expected = {
        task: "Do the dishes",
        priority: 9,
        done: true
    };

    expect(submit.mock.calls[0][0]).toMatchObject(expected);
});