import { render } from "@/test-utils";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { describe, expect, test } from "vitest";
import configureStore from "../../../Store/configureStore";
import Phone from ".";
import { splitWords, filterDigitInput } from "./phoneUtils";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Phone />
      </HelmetProvider>
    </Provider>,
  );
});

describe("splitWords", () => {
  test("splits on spaces", () => {
    expect(splitWords("43556 96753")).toEqual(["43556", "96753"]);
  });

  test("splits on 0s and 1s", () => {
    expect(splitWords("435560967531")).toEqual(["43556", "96753"]);
  });

  test("splits on dashes", () => {
    expect(splitWords("43556-96753")).toEqual(["43556", "96753"]);
  });

  test("filters out segments without valid digits", () => {
    expect(splitWords("000")).toEqual([]);
    expect(splitWords("111")).toEqual([]);
    expect(splitWords("")).toEqual([]);
  });

  test("handles mixed separators", () => {
    expect(splitWords("43556 0 1 96753")).toEqual(["43556", "96753"]);
  });
});

describe("filterDigitInput", () => {
  test("allows digits, spaces, and dashes", () => {
    expect(filterDigitInput("435 56-9")).toBe("435 56-9");
  });

  test("strips letters and special characters", () => {
    expect(filterDigitInput("abc43!@#556")).toBe("43556");
  });
});
