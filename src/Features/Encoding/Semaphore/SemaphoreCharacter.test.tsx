import { createRoot } from "react-dom/client";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import { it } from "vitest";
import SemaphoreCharacter from "./SemaphoreCharacter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const character = new Character();
  character.addDirection(Direction.North);
  character.addDirection(Direction.West);
  const root = createRoot(div);
  root.render(<SemaphoreCharacter character={character} />);
});
