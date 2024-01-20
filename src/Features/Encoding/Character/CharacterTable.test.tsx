import { render } from "@testing-library/react";
import { test } from "vitest";
import CharacterTable from "./CharacterTable";

test("renders without crashing", () => {
  render(<CharacterTable data={[]} />);
});
