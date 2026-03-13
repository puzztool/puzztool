import { render } from "@/test-utils";
import { test } from "vitest";
import SemaphoreReference from "./SemaphoreReference";

test("renders without crashing", () => {
  render(<SemaphoreReference />);
});
