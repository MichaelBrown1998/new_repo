import Library from './Library.js';

function App() {

  const nkJemisinBooks = [
    { title: "The Fifth Season", description: "Setting: the Stillness" },
    { title: "The Obelisk Gate", description: "Essun and Nassun" },
    { title: "The Stone Sky", description: "Corepoint: a city on the other side of the world" }
  ];

  const cookbooks = [
    { title: "Pizza Is Easy", description: "These pizzas might be easy, but they're not good." },
    { title: "Just Fry It", description: "Delicious and greasy" },
    { title: "Fruit is Delicious", description: "It really is." }
  ];

  return (
    <section>
      <Library name="SciFi" books={nkJemisinBooks} />
      <Library name="Cookbooks" books={cookbooks} />
    </section>
  );
}

export default App;
