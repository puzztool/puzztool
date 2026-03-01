import { render } from "@testing-library/react";
import { SemaphoreEncoding } from "puzzle-lib";
import { test } from "vitest";
import SemaphorePicture from "./SemaphorePicture";

test("renders without crashing", () => {
  render(<SemaphorePicture encoding={SemaphoreEncoding.None} width={100} />);
});
