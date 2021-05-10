import { fireEvent, render } from '@testing-library/react';
import LabeledButton from './LabeledButton.js';


test("label should render", () => {
    const result = render(<LabeledButton label="Click Me" />);
    const h4 = result.getByText("Click Me");
    expect(h4).toBeInTheDocument();
});

test('span test is "0"', () => {
    const result = render(<LabeledButton label="Click Me" />);
    const dom = result.baseElement;
    const span = dom.querySelector("span");
    expect(span.innerHTML).toBe("0");
});

test('click updates span', () => {
    const result = render(<LabeledButton label="Click Me" />);
    const dom = result.baseElement;
    const button = dom.querySelector("button");
    const span = dom.querySelector("span");

    fireEvent(
        button,
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    );

    expect(span.innerHTML).toBe("1");
});
