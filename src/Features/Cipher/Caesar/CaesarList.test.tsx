import { render } from "@testing-library/react";
import { test } from "vitest";
import CaesarList from "./CaesarList";

test("renders without crashing", () => {
  render(<CaesarList list={[]} />);
});
