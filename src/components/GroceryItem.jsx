import { FiEdit, FiTrash2 } from "react-icons/fi";

function GroceryItem({ item, onRemove, onEdit }) {
  return (
    <div className="grocery-item">
      <p>{item}</p>
      <div className="actions">
        <button className="edit-btn" onClick={onEdit}>
          <FiEdit size={18} />
        </button>
        <button className="remove-btn" onClick={onRemove}>
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
}
export default GroceryItem;
