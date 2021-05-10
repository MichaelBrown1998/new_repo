import { render } from '@testing-library/react';
import Book from './Book.js';

const book = { title: "Fruit is Delicious", description: "It really is.", likes: 0 };

test("like button was clicked", () => {
    const onLike = jest.fn();
    const result = render(<Book book={book} onLike={onLike} />);
    const likeButton = result.getByText("Like");
    likeButton.dispatchEvent(
        new MouseEvent("click", { bubbles: true }));

    expect(onLike).toHaveBeenCalledTimes(1);

    const h3 = document.querySelector("h3");
    expect(h3.innerHTML).toBe("Fruit is Delicious");
});