// ColorButtonPanel.test.js
import { render } from '@testing-library/react';
import ColorButtonPanel from './ColorButtonPanel.js';

test("DOM manipulation example", () => {
    const result = render(<ColorButtonPanel />);

    const redButton = result.getByText("RED");
    expect(redButton).toBeInTheDocument();

    // grab the virtual DOM
    const dom = result.baseElement;

    // then use regular DOM methods
    const strongs = dom.querySelectorAll("strong");
    expect(strongs.length).toBe(3);

    const buttons = dom.querySelectorAll("div>button");
    expect(buttons.length).toBe(3);

    expect(buttons[2].innerHTML.trim()).toBe("YELLOW");
});

test("click changes color", () => {

    render(<ColorButtonPanel />);

    // `document` is in scope inside Jest tests,
    // just like a browser.
    const buttons = document.querySelectorAll("button");
    const strongs = document.querySelectorAll("strong");

    buttons[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(strongs[1].parentNode.innerHTML).toMatch(/.* red.*/);

    buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(strongs[1].parentNode.innerHTML).toMatch(/.* blue.*/);

    buttons[2].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(strongs[1].parentNode.innerHTML).toMatch(/.* yellow.*/);
});