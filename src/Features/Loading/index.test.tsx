import { createRoot } from "react-dom/client";
import Loading from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<Loading />);
});
