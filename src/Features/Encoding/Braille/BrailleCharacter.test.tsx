import { render } from "@/test-utils";
import { BrailleEncoding } from "puzzle-lib/braille";
import { test } from "vitest";
import BrailleCharacter from "./BrailleCharacter";

test("renders without crashing", () => {
  render(<BrailleCharacter encoding={BrailleEncoding.None} />);
});
