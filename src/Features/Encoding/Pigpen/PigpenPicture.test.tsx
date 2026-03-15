import { render } from "@/test-utils";
import { PigpenEncoding } from "puzzle-lib";
import { test } from "vitest";
import PigpenPicture from "./PigpenPicture";

test("renders without crashing", () => {
  render(<PigpenPicture width={100} encoding={PigpenEncoding.None} />);
});
