import { render } from "@/test-utils";
import { test } from "vitest";
import BrailleReference from "./BrailleReference";

test("renders without crashing", () => {
  render(<BrailleReference />);
});
