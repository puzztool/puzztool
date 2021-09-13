import ReactDOM from "react-dom";
import NavalFlag from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavalFlag />, div);
});
