import ReactDOM from "react-dom";
import { BrailleCharacter as Character } from "puzzle-lib";
import BraillePicture from "./BraillePicture";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BraillePicture character={new Character()} width={100} />,
    div
  );
});
