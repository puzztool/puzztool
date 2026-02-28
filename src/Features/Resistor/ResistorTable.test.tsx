import { render } from "@testing-library/react";
import { test } from "vitest";
import ResistorTable from "./ResistorTable";

test("renders without crashing", () => {
  render(<ResistorTable />);
});
