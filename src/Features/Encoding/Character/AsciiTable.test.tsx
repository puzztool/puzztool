import ReactDOM from "react-dom";
import AsciiTable from "./AsciiTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AsciiTable />, div);
});
