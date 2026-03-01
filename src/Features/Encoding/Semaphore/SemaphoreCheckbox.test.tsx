import { render } from "@testing-library/react";
import { SemaphoreDirection as Direction, SemaphoreEncoding } from "puzzle-lib";
import { test } from "vitest";
import SemaphoreCheckbox from "./SemaphoreCheckbox";

test("renders without crashing", () => {
  render(
    <SemaphoreCheckbox
      encoding={SemaphoreEncoding.None}
      direction={Direction.None}
    />,
  );
});
