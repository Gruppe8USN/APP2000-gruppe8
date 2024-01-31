import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    axios.get("/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error('Failed to fetch users', error)); // Handle error
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
