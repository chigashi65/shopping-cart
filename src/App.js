

import React from 'react';
import '../src/App.css';
import './styles.css'; // Import the newly created styles.css file
import ShoppingList from '../src/components/ShoppingList';
import ShoppingCart from '../src/components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <div className="shopping-container">
        <ShoppingList />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
