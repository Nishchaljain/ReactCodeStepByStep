import React, { useEffect } from "react";

const Counter = ({ count }) => {
  const handleCounter = () => {
    return console.log("handleCounter function called");
  };

  useEffect(() => {
    console.log("Component Did Mount");
  }, []);

  useEffect(() => {
    //handleCounter();
    console.log("Component Did Update");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  return (
    <div>
      <h1>Counter Value {count}</h1>
    </div>
  );
};

export default Counter;
