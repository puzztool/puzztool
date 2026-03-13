import { render } from "@/test-utils";
import { test } from "vitest";
import MorsePicture from "./MorsePicture";

test("renders without crashing", () => {
  render(<MorsePicture morseString="" />);
});
