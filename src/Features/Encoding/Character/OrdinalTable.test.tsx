import { render } from "@/test-utils";
import { test } from "vitest";
import OrdinalTable from "./OrdinalTable";

test("renders without crashing", () => {
  render(<OrdinalTable />);
});
