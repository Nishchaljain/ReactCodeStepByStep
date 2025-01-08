import React, { useEffect } from "react";
import { useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    greeting();
  }, []);
  const greeting = () => {
    console.log("Hello from useEffect Hook");
  };

  return (
    <div>
      <h2>Use Effect Hook</h2>
      <button onClick={() => setCount(count + 1)}>Clicked:{count}</button>
    </div>
  );
};

export default UseEffectHook;
