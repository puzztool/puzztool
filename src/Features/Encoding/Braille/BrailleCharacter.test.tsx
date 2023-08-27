import { createRoot } from "react-dom/client";
import { BrailleCharacter as Character } from "puzzle-lib";
import { it } from "vitest";
import BrailleCharacter from "./BrailleCharacter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<BrailleCharacter character={new Character()} />);
});
