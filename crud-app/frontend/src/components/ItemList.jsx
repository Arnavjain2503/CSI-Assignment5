import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', quantity: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/api/items')
      .then(res => setItems(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditValues({ name: item.name, quantity: item.quantity });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3000/api/items/${editingId}`, editValues);
    setEditingId(null);
    window.location.reload();
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>
          <tr key={item._id}>
            <td>
              {editingId === item._id ?
                <input value={editValues.name} onChange={e => setEditValues({ ...editValues, name: e.target.value })} /> :
                item.name}
            </td>
            <td>
              {editingId === item._id ?
                <input type="number" value={editValues.quantity} onChange={e => setEditValues({ ...editValues, quantity: e.target.value })} /> :
                item.quantity}
            </td>
            <td>
              {editingId === item._id ? (
                <button className="btn btn-success btn-sm" onClick={handleUpdate}>Save</button>
              ) : (
                <button className="btn btn-warning btn-sm me-2" onClick={() => startEdit(item)}>Edit</button>
              )}
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ItemList;
