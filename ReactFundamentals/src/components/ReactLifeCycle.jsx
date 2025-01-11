import React, { useEffect } from "react";

const ReactLifeCycle = () => {
  useEffect(() => {
    console.log("Component Did Mount");
  }, []);
  return (
    <div>
      <h1>React Life Cycle</h1>
    </div>
  );
};

export default ReactLifeCycle;
