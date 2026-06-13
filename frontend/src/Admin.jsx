import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/admin/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Admin;