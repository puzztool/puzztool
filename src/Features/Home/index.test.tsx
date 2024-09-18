import { render } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { test } from "vitest";
import Home from ".";

test("renders without crashing", () => {
  render(
    <Router>
      <Home />
    </Router>,
  );
});
