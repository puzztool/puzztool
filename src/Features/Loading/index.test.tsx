import { render } from "@/test-utils";
import { test } from "vitest";
import Loading from ".";

test("renders without crashing", () => {
  render(<Loading />);
});
