import { render } from "@testing-library/react";
import { BrailleCharacter as Character } from "puzzle-lib";
import { test } from "vitest";
import BraillePicture from "./BraillePicture";

test("renders without crashing", () => {
  render(<BraillePicture character={new Character()} width={100} />);
});
