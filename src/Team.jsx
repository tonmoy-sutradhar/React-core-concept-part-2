import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const teamAdd = team + 1;
    setTeam(teamAdd);
  };

  const handleRemove = () => {
    const teamRemove = team - 1;
    setTeam(teamRemove);
  };
  return (
    <div
      style={{
        border: "2px solid green",
        margin: "20px",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <h3>Players: {team} </h3>
      <button style={{ marginRight: "15px" }} onClick={handleAdd}>
        Add
      </button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
