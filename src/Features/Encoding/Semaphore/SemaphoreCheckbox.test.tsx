import { render } from "@testing-library/react";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import { test } from "vitest";
import SemaphoreCheckbox from "./SemaphoreCheckbox";

test("renders without crashing", () => {
  render(
    <SemaphoreCheckbox
      character={new Character()}
      direction={Direction.None}
    />,
  );
});
