import { render } from "@testing-library/react";
import { test } from "vitest";
import SemaphoreReference from "./SemaphoreReference";

test("renders without crashing", () => {
  render(<SemaphoreReference />);
});
