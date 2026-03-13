import { render } from "@/test-utils";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import Nato from ".";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <Nato />
    </HelmetProvider>,
  );
});
