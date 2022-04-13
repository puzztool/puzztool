import { createRoot } from "react-dom/client";
import AsciiTable from "./AsciiTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<AsciiTable />);
});
