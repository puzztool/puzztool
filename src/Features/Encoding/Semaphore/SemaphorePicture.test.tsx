import { createRoot } from "react-dom/client";
import { SemaphoreCharacter as Character } from "puzzle-lib";
import SemaphorePicture from "./SemaphorePicture";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <SemaphorePicture character={new Character()} width={100} />
  );
});
