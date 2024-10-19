import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [Friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div
      style={{
        border: "2px solid yellow",
        margin: "20px",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <h3>Friends: {Friends.length}</h3>

      {Friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
