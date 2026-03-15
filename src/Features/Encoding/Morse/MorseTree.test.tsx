import { render } from "@/test-utils";
import { test } from "vitest";
import MorseTree from "./MorseTree";

test("renders without crashing", () => {
  render(<MorseTree />);
});
