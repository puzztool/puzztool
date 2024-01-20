import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import SemaphoreStream from "./SemaphoreStream";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <SemaphoreStream />
    </Provider>,
  );
});
