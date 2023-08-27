import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { it } from "vitest";
import Home from ".";

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
