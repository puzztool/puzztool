import { createRoot } from "react-dom/client";
import ReferenceList from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<ReferenceList />);
});
