import { render } from "@testing-library/react";
import { SemaphoreCharacter as Character } from "puzzle-lib";
import { test } from "vitest";
import SemaphorePicture from "./SemaphorePicture";

test("renders without crashing", () => {
  render(<SemaphorePicture character={new Character()} width={100} />);
});
