import { render } from "@/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, test } from "vitest";
import configureStore from "../../../Store/configureStore";
import MorseStream from "./MorseStream";

function renderMorseStream() {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <MorseStream />
    </Provider>,
  );
}

function typeInput(value: string) {
  const input = screen.getByLabelText("Morse code input");
  fireEvent.change(input, { target: { value } });
}

function getPlaintext(): string {
  const pres = document.querySelectorAll("pre");
  return pres[0]?.textContent?.trim() ?? "";
}

test("renders without crashing", () => {
  renderMorseStream();
});

describe("text input normalization", () => {
  test("decodes basic morse input", () => {
    renderMorseStream();
    typeInput(".... . .-.. .-.. ---");
    expect(getPlaintext()).toBe("HELLO");
  });

  test("treats tabs as word dividers", () => {
    renderMorseStream();
    typeInput(".... ..\t- .");
    expect(getPlaintext()).toBe("HI TE");
  });

  test("treats slash as word divider", () => {
    renderMorseStream();
    typeInput(".... .. / - .");
    expect(getPlaintext()).toBe("HI TE");
  });
});
