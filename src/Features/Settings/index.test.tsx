import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { it } from "vitest";
import Settings from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <HelmetProvider>
      <Settings />
    </HelmetProvider>,
  );
});
