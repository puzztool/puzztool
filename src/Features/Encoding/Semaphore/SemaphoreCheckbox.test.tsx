import { createRoot } from "react-dom/client";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import SemaphoreCheckbox from "./SemaphoreCheckbox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <SemaphoreCheckbox
      character={new Character()}
      direction={Direction.None}
    />,
  );
});
