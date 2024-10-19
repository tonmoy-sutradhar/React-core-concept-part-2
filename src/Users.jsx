import { useEffect, useState } from "react";

export default function Users() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div
      style={{
        border: "2px solid purple",
        margin: "20px",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <h3>Users: {user.length}</h3>
    </div>
  );
}
