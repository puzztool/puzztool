import { render } from "@testing-library/react";
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
