import { render } from "@testing-library/react";
import { test } from "vitest";
import OrdinalTable from "./OrdinalTable";

test("renders without crashing", () => {
  render(<OrdinalTable />);
});
