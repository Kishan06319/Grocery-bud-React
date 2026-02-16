// src/App.jsx
import { useState } from "react";
import GroceryItem from "./components/GroceryItem";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <main>
      <h2>Grocery Bud</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter grocery item"
        />
        <button type="submit">Add Item</button>
      </form>
      {items.map((item, index) => (
        <GroceryItem key={index} item={item} />
      ))}
    </main>
  );
}

export default App;
