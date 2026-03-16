import { render } from "@/test-utils";
import { fireEvent, screen } from "@testing-library/react";
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
    // With no dots, partial candidates should not appear
    expect(screen.queryByText(/B C D/)).toBeNull();
  });

  test("shows partial matches after toggling a dot", () => {
    renderBrailleStream();
    // The first 6 buttons are the braille dot cells
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    // After clicking the upper-left dot (encoding=A/1), partials should include B, C, D...
    expect(screen.getByText(/B C D/)).toBeDefined();
  });
});
