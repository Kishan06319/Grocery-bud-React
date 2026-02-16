// src/components/GroceryItem.jsx
function GroceryItem({ item, onRemove }) {
  return (
    <div className="grocery-item">
      <p>{item}</p>
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}
export default GroceryItem;
