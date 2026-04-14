import React, { useCallback, useMemo, useState } from 'react';

// Assume this is a very complex, heavy component
const SnackCard = React.memo( ({ snack, onAdd, index }) => {
  console.log(`Rendering ${snack.name}`); 
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
      <h4>{snack.name}</h4>
      <p>₹{snack.price}</p>
      <button onClick={() => onAdd(snack)}>Add to Cart</button>
    </div>
  );
});

export default function SnackMenu() {
  const [cart, setCart] = useState([]);
  const [snacks, setSnacks] = useState([
    { id: 101, name: 'Spicy Masala Chips', price: 40 },
    { id: 102, name: 'Roasted Almonds', price: 150 },
    { id: 103, name: 'Protein Bar', price: 80 },
  ]);

  const handleAddToCart = useCallback((snack)=>{
    setCart(prev => [...prev,snack]);
    setCart
  },[])

  const handleClearCart = () => {
   setCart([])
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Snack Store</h2>
      <div style={{ background: '#eee', padding: '10px', marginBottom: '20px' }}>
        <strong>Cart Items: {cart.length}</strong>
        <button onClick={handleClearCart} style={{ marginLeft: '10px' }}>
          Clear Cart
        </button>
        <button onClick={handleClearCart} style={{ marginLeft: '10px' }}>
          Clear Cart 
        </button>
        <button onClick={handleClearCart} style={{ marginLeft: '10px' }}>
          Clear Cart 
        </button>
      </div>

      <div>
        {snacks.map((snack, index) => (
          <SnackCard 
            key={snack.id} 
            snack={snack} 
            onAdd={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}