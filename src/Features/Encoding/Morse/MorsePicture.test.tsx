import { render } from "@testing-library/react";
import { test } from "vitest";
import MorsePicture from "./MorsePicture";

test("renders without crashing", () => {
  render(<MorsePicture morseString="" />);
});
