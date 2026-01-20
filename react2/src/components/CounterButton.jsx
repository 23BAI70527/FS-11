import { useState } from "react";


function CounterButton() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#b3d9ff",      // light blue shade
    color: "black",
    fontSize: "16px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
    marginTop: "20px"
  };

  return (
    <button style={btnStyle} onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

export default CounterButton;
