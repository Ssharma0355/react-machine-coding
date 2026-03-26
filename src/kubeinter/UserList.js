import React, { useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Admin', expanded: false },
    { id: 2, name: 'Bob', role: 'Editor', expanded: false },
    { id: 3, name: 'Charlie', role: 'Viewer', expanded: false },
  ]);

  const toggleExpand = (id) => {
    const updatedUsers = users.map(user => 
      user.id === id ? { ...user, expanded: !user.expanded } : user
    );
    setUsers(updatedUsers);
  };

  const handleDelete = (e,id) => {
    e.stopPropagation()
    const filtereduser = users.filter( user => user.id !== id)
    console.log(filtereduser)
    setUsers(filtereduser)
    
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Team Members</h2>
      {users.length>0 ? <>{users.map((user, index) => (
        <div 
          key={user.id} 
          onClick={() => toggleExpand(user.id)}
          style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{user.name}</strong>
            <button onClick={(e) => handleDelete(e,user.id)}>X</button>
          </div>
          
          {user.expanded && (
            <div style={{ marginTop: '10px', color: 'gray' }}>
              Role: {user.role}
            </div>
          )}
        </div>
      ))}
      </>
      :<>No user found</>
}
    </div>
  );
}