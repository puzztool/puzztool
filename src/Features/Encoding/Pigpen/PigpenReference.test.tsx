import { render } from "@/test-utils";
import { test } from "vitest";
import PigpenReference from "./PigpenReference";

test("renders without crashing", () => {
  render(<PigpenReference />);
});
