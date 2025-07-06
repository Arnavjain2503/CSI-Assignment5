import React, { useState } from 'react';
import axios from 'axios';

function ItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, quantity });

    try {
      const res = await axios.post('http://localhost:3000/api/items', {
        name,
        quantity: Number(quantity), 
      });
      console.log('Item created:', res.data);
      setName('');
      setQuantity('');
      window.location.reload();
    } catch (err) {
      console.error('Error adding item:', err);
      alert('Error adding item. Check the console.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Name:</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Add Item
      </button>
    </form>
  );
}

export default ItemForm;
