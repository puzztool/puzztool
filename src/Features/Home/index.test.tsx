import { render } from "@/test-utils";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import Home from ".";

test("renders without crashing", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Home />
    </BrowserRouter>,
  );
});
