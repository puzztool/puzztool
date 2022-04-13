import { createRoot } from "react-dom/client";
import MorseTable from "./MorseTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<MorseTable />);
});
