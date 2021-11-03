import { useState } from "react";
const Counter = () => {
  const [count, setLikes] = useState(0);
  function increment() {
    setLikes(count + 1);
  }
  function decrement() {
    setLikes(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
