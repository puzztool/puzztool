import { render } from "@testing-library/react";
import { test } from "vitest";
import BrailleReference from "./BrailleReference";

test("renders without crashing", () => {
  render(<BrailleReference />);
});
