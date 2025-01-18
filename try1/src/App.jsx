import ConditionalComponent from "./components/ConditionalComponent";
import Hello from "./components/Hello";
import Fruit from "./components/Fruit";
import Message from "./components/message";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState({ firstName: "", lastName: "" });

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count value is {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <form>
        <input
          onChange={(e) =>
            setTextValue({ ...textValue, firstName: e.target.value })
          }
          type="text"
          placeholder="Firstname"
          value={textValue.firstName}
        />
        <input
          onChange={(e) =>
            setTextValue({ ...textValue, lastName: e.target.value })
          }
          type="text"
          placeholder="Lastname"
          value={textValue.lastName}
        />
      </form>
    </div>
  );
}

export default App;
