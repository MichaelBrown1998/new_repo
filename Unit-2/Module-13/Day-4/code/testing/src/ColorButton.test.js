// ColorButton.test.js
import { render } from '@testing-library/react';
import ColorButton from './ColorButton.js';

test("click triggers callback", () => {
    // a "dummy" function to be called by CoinPanelFunc
    const onClick = jest.fn();

    const result = render(<ColorButton onClick={onClick} color="purple" />);
    const button = result.getByText("PURPLE");

    // Click the button.
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    // Our dummy function keeps track of the number of calls.
    expect(onClick).toHaveBeenCalledTimes(1);

    // Click it again.
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(onClick).toHaveBeenCalledTimes(2);
});