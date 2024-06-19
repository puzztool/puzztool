import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import Braille from ".";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Braille />
      </HelmetProvider>
    </Provider>,
  );
});
