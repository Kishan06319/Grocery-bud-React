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

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    setItems([]);
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
      <section>
        {items.map((item, index) => (
          <GroceryItem
            key={index}
            item={item}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </section>
      {items.length > 0 && (
        <button className="clear-btn" onClick={handleClear}>
          Clear All
        </button>
      )}
    </main>
  );
}

export default App;
