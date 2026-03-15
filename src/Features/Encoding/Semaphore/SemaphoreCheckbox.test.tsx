import { render } from "@/test-utils";
import {
  SemaphoreDirection as Direction,
  SemaphoreEncoding,
} from "puzzle-lib/semaphore";
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
