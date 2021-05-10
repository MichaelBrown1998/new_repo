import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

// test('renders "Pokedex"', () => {
//     render(<App />);
//     const element = screen.getByText("Pokedex");
//     expect(element).toBeInTheDocument();
// });