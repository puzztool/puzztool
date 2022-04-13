import { createRoot } from "react-dom/client";
import BrailleReference from "./BrailleReference";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<BrailleReference />);
});
