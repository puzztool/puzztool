import { render } from "@/test-utils";
import { test } from "vitest";
import SettingsDrawer from ".";

test("renders without crashing", () => {
  render(<SettingsDrawer opened={true} onClose={() => {}} />);
});
