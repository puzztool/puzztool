import { render } from "@testing-library/react";
import {
  SemaphoreDirection as Direction,
  SemaphoreEncoding,
  addSemaphoreDirection,
} from "puzzle-lib";
import { test } from "vitest";
import SemaphoreCharacter from "./SemaphoreCharacter";

test("renders without crashing", () => {
  let encoding = SemaphoreEncoding.None;
  encoding = addSemaphoreDirection(encoding, Direction.North);
  encoding = addSemaphoreDirection(encoding, Direction.West);
  render(<SemaphoreCharacter encoding={encoding} />);
});
