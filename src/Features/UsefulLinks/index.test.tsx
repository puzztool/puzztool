import { render } from "@/test-utils";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import UsefulLinks from ".";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <UsefulLinks />
    </HelmetProvider>,
  );
});
