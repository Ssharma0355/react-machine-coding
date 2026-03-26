import React, { useState, useEffect } from 'react';

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setProducts([
        { id: 1, title: 'Wireless Mouse' },
        { id: 2, title: 'Mechanical Keyboard' },
        { id: 3, title: 'USB-C Hub' },
        setIsloading(false)
      ]);
    }, 1000);
  }, []);

  const filteredData = products.filter(prod => prod?.title.toLowerCase().includes(searchQuery.toLowerCase()))
  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)} 
        placeholder="Search products..." 
      />
      <ul>
        {isLoading ?<>Loafing</>:filteredData.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}