import { render } from "@testing-library/react";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import { test } from "vitest";
import SemaphoreCharacter from "./SemaphoreCharacter";

test("renders without crashing", () => {
  const character = new Character();
  character.addDirection(Direction.North);
  character.addDirection(Direction.West);
  render(<SemaphoreCharacter character={character} />);
});
