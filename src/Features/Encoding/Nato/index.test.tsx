import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Nato from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <HelmetProvider>
      <Nato />
    </HelmetProvider>,
  );
});
