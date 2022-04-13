import { createRoot } from "react-dom/client";
import CaesarList from "./CaesarList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<CaesarList list={[]} />);
});
