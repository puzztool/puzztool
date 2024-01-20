import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import Settings from ".";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <Settings />
    </HelmetProvider>,
  );
});
