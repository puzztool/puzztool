import { render } from "@/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import {
  BrailleDot,
  BrailleEncoding,
  lookupBrailleEncoding,
  toggleBrailleDot,
} from "puzzle-lib/braille";
import { Provider } from "react-redux";
import { describe, expect, test } from "vitest";
import configureStore from "../../../Store/configureStore";
import BrailleStream from "./BrailleStream";

function renderBrailleStream() {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <BrailleStream />
    </Provider>,
  );
}

test("renders without crashing", () => {
  renderBrailleStream();
});

describe("partial match display", () => {
  test("hides partial matches when no dots are selected", () => {
    renderBrailleStream();
    expect(screen.queryByTestId("partial-matches")).toBeNull();
  });

  test("shows partial matches after toggling a dot", () => {
    renderBrailleStream();
    // First 6 buttons are braille dots, then action buttons follow
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);

    const encoding = toggleBrailleDot(
      BrailleEncoding.None,
      BrailleDot.UpperLeft,
    );
    const expected = lookupBrailleEncoding(encoding)
      .partial.map((e) => e.display)
      .join(" ");

    const partials = screen.getByTestId("partial-matches");
    expect(partials.textContent).toBe(expected);
  });
});
