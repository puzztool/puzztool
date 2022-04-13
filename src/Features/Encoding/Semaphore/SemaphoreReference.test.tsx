import { createRoot } from "react-dom/client";
import SemaphoreReference from "./SemaphoreReference";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<SemaphoreReference />);
});
