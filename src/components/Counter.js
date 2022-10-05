import { useState } from "react";

const Counter = (props) => {
  const text = props.text;
  const [count, setCount] = useState(false);
  return (
    <div
      style={count ? { color: "#FF417D" } : { color: "#919299" }}
      onClick={() => {
        setCount((current) => !current);
      }}
    >
      <div>{text}</div>
      <div>{count ? 1 : 0}</div>
    </div>
  );
};

export default Counter;
