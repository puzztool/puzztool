import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { it } from "vitest";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
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
