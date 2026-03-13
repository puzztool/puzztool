import { render } from "@/test-utils";
import { test } from "vitest";
import MorseTable from "./MorseTable";

test("renders without crashing", () => {
  render(<MorseTable />);
});
