import React from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="container mt-5">
      <h2>MongoDB CRUD App</h2>
      <ItemForm />
      <hr />
      <ItemList />
    </div>
  );
}

export default App;
