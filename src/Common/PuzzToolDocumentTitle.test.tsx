import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import PuzzToolDocumentTitle from "./PuzzToolDocumentTitle";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <PuzzToolDocumentTitle />
    </HelmetProvider>,
  );
});
