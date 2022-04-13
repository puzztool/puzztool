import { createRoot } from "react-dom/client";
import { BrailleCharacter as Character } from "puzzle-lib";
import BraillePicture from "./BraillePicture";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <BraillePicture character={new Character()} width={100} />
  );
});
