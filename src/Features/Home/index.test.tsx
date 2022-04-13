import { createRoot } from "react-dom/client";
import Home from ".";
import { HashRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const element = (
    <Router>
      <Home />
    </Router>
  );

  const root = createRoot(div);
  root.render(element);
});
