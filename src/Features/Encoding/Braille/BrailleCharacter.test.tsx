import { render } from "@testing-library/react";
import { BrailleCharacter as Character } from "puzzle-lib";
import { test } from "vitest";
import BrailleCharacter from "./BrailleCharacter";

test("renders without crashing", () => {
  render(<BrailleCharacter character={new Character()} />);
});
