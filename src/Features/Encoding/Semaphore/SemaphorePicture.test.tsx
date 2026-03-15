import { render } from "@/test-utils";
import { SemaphoreEncoding } from "puzzle-lib/semaphore";
import { test } from "vitest";
import SemaphorePicture from "./SemaphorePicture";

test("renders without crashing", () => {
  render(<SemaphorePicture encoding={SemaphoreEncoding.None} width={100} />);
});
