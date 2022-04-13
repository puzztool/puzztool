import { createRoot } from "react-dom/client";
import { BrailleCharacter as Character, BrailleDot as Dot } from "puzzle-lib";
import BrailleCell from "./BrailleCell";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <BrailleCell character={new Character()} mask={Dot.None} />
  );
});
