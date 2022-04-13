import { createRoot } from "react-dom/client";
import OrdinalTable from "./OrdinalTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<OrdinalTable />);
});
