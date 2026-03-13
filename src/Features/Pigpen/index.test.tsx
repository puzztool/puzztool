import { render } from "@/test-utils";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import Pigpen from ".";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <Pigpen />
    </HelmetProvider>,
  );
});
