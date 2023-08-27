import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import CaesarStream from "./CaesarStream";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <CaesarStream prompt="Type here" />
    </Provider>,
  );
});
