import { render } from "@/test-utils";
import { test } from "vitest";
import CaesarList from "./CaesarList";

test("renders without crashing", () => {
  render(<CaesarList list={[]} />);
});
