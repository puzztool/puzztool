import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { it } from "vitest";
import Home from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const element = (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
      <Home />
    </BrowserRouter>
  );

  const root = createRoot(div);
  root.render(element);
});
