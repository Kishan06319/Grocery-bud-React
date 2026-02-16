// src/App.jsx
import { useState } from "react";
import GroceryItem from "./components/GroceryItem";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (isEditing) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? input : item,
      );
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput("");
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setInput(items[index]);
  };

  const handleClear = () => {
    setItems([]);
    setIsEditing(false);
    setEditIndex(null);
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
        <button type="submit">{isEditing ? "Update Item" : "Add Item"}</button>
      </form>
      <section>
        {items.map((item, index) => (
          <GroceryItem
            key={index}
            item={item}
            onRemove={() => handleRemove(index)}
            onEdit={() => handleEdit(index)}
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
