import { render } from "@/test-utils";
import { test } from "vitest";
import ResistorTable from "./ResistorTable";

test("renders without crashing", () => {
  render(<ResistorTable />);
});
