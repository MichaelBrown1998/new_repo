import { act, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Pokemon from './Pokemon.js';

const weedle = {
    name: "weedle",
    sprites: {
        back_shiny: "https://example.com/12.png"
    }
};

test("should render Weedle", async () => {

    // 1. Replace global.fetch with a mock implementation.
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(weedle)
        }));

    // 2. Since fetch is promise-driven, 
    // we must await in our test.
    let result;
    await act(async () => {
        // 3. React Router must be mocked as well.
        result = render(
            <MemoryRouter initialEntries={["/12"]}>
                <Route path={"/:dexNumber"}>
                    <Pokemon />
                </Route>
            </MemoryRouter>
        );
    });

    const h3 = result.getByText("weedle");
    expect(h3).toBeInTheDocument();
});