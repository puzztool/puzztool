import { render } from "@testing-library/react";
import { BrailleEncoding } from "puzzle-lib";
import { test } from "vitest";
import BrailleCharacter from "./BrailleCharacter";

test("renders without crashing", () => {
  render(<BrailleCharacter encoding={BrailleEncoding.None} />);
});
