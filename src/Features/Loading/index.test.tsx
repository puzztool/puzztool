import ReactDOM from "react-dom";
import Loading from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loading />, div);
});
