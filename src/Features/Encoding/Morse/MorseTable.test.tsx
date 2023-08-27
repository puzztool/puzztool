import { render } from "@testing-library/react";
import { test } from "vitest";
import MorseTable from "./MorseTable";

test("renders without crashing", () => {
  render(<MorseTable />);
});
