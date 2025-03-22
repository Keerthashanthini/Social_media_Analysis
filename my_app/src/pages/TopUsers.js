import React, { useEffect, useState } from "react";
import { fetchTopUsers } from "../api";

function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">🏆 Top Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <strong>{user.name}</strong> - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
