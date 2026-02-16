// src/components/GroceryItem.jsx
function GroceryItem({ item, onRemove, onEdit }) {
  return (
    <div className="grocery-item">
      <p>{item}</p>
      <div className="actions">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>
        <button className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
export default GroceryItem;
