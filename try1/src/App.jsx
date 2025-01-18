import ConditionalComponent from "./components/ConditionalComponent";
import Hello from "./components/Hello";
import Fruit from "./components/Fruit";
import Message from "./components/message";

function App() {
  function handleClickButton() {
    return console.log("Hi");
  }

  return (
    <div>
      <button onClick={handleClickButton}>Click me to see a message</button>
    </div>
  );
}

export default App;
