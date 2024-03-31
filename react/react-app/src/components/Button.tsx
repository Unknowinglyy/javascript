import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
export default Button;
