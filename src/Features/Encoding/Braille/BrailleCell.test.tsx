import { render } from "@testing-library/react";
import { BrailleCharacter as Character, BrailleDot as Dot } from "puzzle-lib";
import { test } from "vitest";
import BrailleCell from "./BrailleCell";

test("renders without crashing", () => {
  render(<BrailleCell character={new Character()} mask={Dot.None} />);
});
