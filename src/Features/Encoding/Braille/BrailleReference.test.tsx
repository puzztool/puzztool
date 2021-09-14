import ReactDOM from "react-dom";
import BrailleReference from "./BrailleReference";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrailleReference />, div);
});
