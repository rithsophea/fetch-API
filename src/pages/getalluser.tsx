import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Name:</strong> {user.name.firstname} {user.name.lastname}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Address:</strong> {user.address.street}, {user.address.city}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Users;
