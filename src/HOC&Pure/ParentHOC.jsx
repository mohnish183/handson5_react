import React, { useState } from "react";

export default function ParentHOC() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count :{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
