import { render } from "@/test-utils";
import { test } from "vitest";
import AsciiTable from "./AsciiTable";

test("renders without crashing", () => {
  render(<AsciiTable />);
});
