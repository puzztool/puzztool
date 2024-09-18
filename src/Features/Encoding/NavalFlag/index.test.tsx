import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { test } from "vitest";
import NavalFlag from ".";

test("renders without crashing", () => {
  render(
    <HelmetProvider>
      <NavalFlag />
    </HelmetProvider>,
  );
});
