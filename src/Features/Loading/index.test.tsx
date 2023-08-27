import { render } from "@testing-library/react";
import { test } from "vitest";
import Loading from ".";

test("renders without crashing", () => {
  render(<Loading />);
});
