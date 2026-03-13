import { render } from "@/test-utils";
import { BrailleDot as Dot, BrailleEncoding } from "puzzle-lib";
import { test } from "vitest";
import BrailleCell from "./BrailleCell";

test("renders without crashing", () => {
  render(<BrailleCell encoding={BrailleEncoding.None} mask={Dot.None} />);
});
