import { render } from "@/test-utils";
import { test } from "vitest";
import ReferenceList from ".";

test("renders without crashing", () => {
  render(<ReferenceList />);
});
