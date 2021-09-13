import ReactDOM from "react-dom";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import SemaphoreCharacter from "./SemaphoreCharacter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const character = new Character();
  character.addDirection(Direction.North);
  character.addDirection(Direction.West);
  ReactDOM.render(<SemaphoreCharacter character={character} />, div);
});
