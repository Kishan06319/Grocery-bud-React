import { FaEdit, FaTrash } from "react-icons/fa";

function GroceryItem({ item, onRemove, onEdit }) {
  return (
    <div className="grocery-item">
      <p>{item}</p>
      <div className="actions">
        <button className="edit-btn" onClick={onEdit}>
          <FaEdit />
        </button>
        <button className="remove-btn" onClick={onRemove}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
export default GroceryItem;
