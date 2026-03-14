import { render } from "@/test-utils";
import { BrailleEncoding } from "puzzle-lib/braille";
import { test } from "vitest";
import BraillePicture from "./BraillePicture";

test("renders without crashing", () => {
  render(<BraillePicture encoding={BrailleEncoding.None} width={100} />);
});
