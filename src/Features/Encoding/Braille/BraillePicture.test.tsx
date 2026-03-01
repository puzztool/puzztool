import { render } from "@testing-library/react";
import { BrailleEncoding } from "puzzle-lib";
import { test } from "vitest";
import BraillePicture from "./BraillePicture";

test("renders without crashing", () => {
  render(<BraillePicture encoding={BrailleEncoding.None} width={100} />);
});
