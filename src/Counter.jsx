import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newReduce = count - 1;
    setCount(newReduce);
  };
  return (
    <div
      style={{
        border: "2px solid blue",
        margin: "20px",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h3>Counter: {count} </h3>
      <button onClick={handleAdd} style={{ marginRight: "15px" }}>
        Add
      </button>
      <button onClick={handleReduce}>Reduce</button>
      <br />
    </div>
  );
}
