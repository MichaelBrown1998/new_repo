import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Bee from './Bee.js';

test("should render Halictidae", () => {
    render(
        <MemoryRouter initialEntries={["/Halictidae"]}>
            <Route path={"/:family"}>
                <Bee />
            </Route>
        </MemoryRouter>
    );

    const h3 = document.querySelector("h3");
    const p = document.querySelector("p");
    const img = document.querySelector("img");

    expect(h3.innerHTML).toBe("Halictidae");
    expect(p.innerHTML).toMatch(/.*Anthophila bees.*/);
    expect(img.alt).toBe("Halictidae");
});
