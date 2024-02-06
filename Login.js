import { useEffect, useState } from "react";
import React from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
const [users, setUsers] = useState([])
useEffect ( ( )=> {
axios.get('http://localhost:3000/getUsers')
.then (users => setUsers(users.data))
.catch(err => console.log(err))
}, [])

return (
<div className="w-100 vh-100 d-flex justify-content-center align-items-center">
div class Name="w-50"
<table className="table">
<thead>
<tr>
<th>
Name
</th>
<th>
Email
</th>
<th>Age</th>
</tr>

</thead>
<tbody>
{
users.map(users => {
    return <tr>
<td>{users.name}</td>
<td>{users.email}</td>
<td>{users.age}</td>
</tr>
})
}
</tbody>
</table>
</div>

);
}



function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Add your login form and other login-related components here */}
    </div>
  );
}

export default Login;