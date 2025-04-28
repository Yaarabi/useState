import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let reset = () => {
    useEffect(() => {
      setCount(count * 0);
    }, [count]);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count * 2)}>*</button>
      <button onClick={() => setCount(count / 2)}>/</button>
      <button onClick={() => setCount(count * 0)}>reset</button>
    </div>
  );
}
