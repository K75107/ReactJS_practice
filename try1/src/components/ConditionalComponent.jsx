import FalseCondition from "./FalseCondition";
import TrueCondition from "./TrueCondition";
export default function ConditionalComponent() {
  let message;
  const display = false;

  message = display ? "I am True" : "I am False";

  return message;
}
