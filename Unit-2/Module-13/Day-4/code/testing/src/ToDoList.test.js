import { act, render } from '@testing-library/react';
import ToDoList from './ToDoList.js';

const todos = [
    { id: 1, task: "test 1", priority: 1, done: false },
    { id: 2, task: "test 2", priority: 2, done: true },
    { id: 3, task: "test 3", priority: 3, done: false },
];

test("should render 3 todos", async () => {

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(todos)
        }));


    let result;
    await act(async () => {
        result = render(<ToDoList />)
    });

    const dom = result.baseElement;
    expect(dom.querySelectorAll("tbody>tr").length).toBe(3);
});