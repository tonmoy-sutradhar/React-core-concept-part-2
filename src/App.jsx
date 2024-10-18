import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 clicked.");
  };

  const AddFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React Core Concept - 2</h2>
      <button onClick={handleClick}>Click Me1</button>
      <br /> <br />
      <button onClick={handleClick2}>Click Me2</button>
      <br />
      <br />
      <button
        onClick={() => {
          alert("Third button Clicked");
        }}
      >
        Click Me3
      </button>
      <br />
      <br />
      <button onClick={() => AddFive(4)}>Click Me4</button>
    </>
  );
}

export default App;
