import { render } from "@testing-library/react";
import { test } from "vitest";
import ReferenceList from ".";

test("renders without crashing", () => {
  render(<ReferenceList />);
});
