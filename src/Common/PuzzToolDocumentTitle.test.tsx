import { render } from "@/test-utils";
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
