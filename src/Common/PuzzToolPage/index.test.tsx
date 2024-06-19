import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import PuzzToolPage from ".";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <PuzzToolPage title="Test Page">Hi!</PuzzToolPage>
    </HelmetProvider>,
  );
});
