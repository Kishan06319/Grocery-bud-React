import React, { useState, useEffect, useRef } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("grocery-list");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("grocery-list", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!input) return;
    if (isEditing) {
      setItems(
        items.map((item) =>
          item.id === editId ? { ...item, title: input } : item,
        ),
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setItems([...items, { id: Date.now(), title: input }]);
    }
    setInput("");
  };

  const editItem = (id) => {
    const item = items.find((i) => i.id === id);
    setIsEditing(true);
    setEditId(id);
    setInput(item.title);
    inputRef.current.focus(); // auto-focus input
  };

  const removeItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
        />
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>

      {items.map((item) => (
        <div key={item.id} className="grocery-item">
          <span>{item.title}</span>
          <div className="actions">
            <button className="edit-btn" onClick={() => editItem(item.id)}>
              ✏️
            </button>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              ❌
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <button className="clear-btn" onClick={clearItems}>
          Clear All
        </button>
      )}
    </main>
  );
}

export default App;
