import { render } from "@/test-utils";
import { BrowserRouter } from "react-router-dom";
import { test } from "vitest";
import App from "./App";

test("renders without crashing", () => {
  render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <App />
    </BrowserRouter>,
  );
});
