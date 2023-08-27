import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import AutokeyStream from "./AutokeyStream";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <AutokeyStream prompt="Type here" />
    </Provider>,
  );
});
