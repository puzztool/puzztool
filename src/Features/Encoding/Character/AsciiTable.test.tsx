import { render } from "@testing-library/react";
import { test } from "vitest";
import AsciiTable from "./AsciiTable";

test("renders without crashing", () => {
  render(<AsciiTable />);
});
