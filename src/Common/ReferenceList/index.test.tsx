import ReactDOM from "react-dom";
import ReferenceList from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReferenceList />, div);
});
