import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import VigenereStream from "./VigenereStream";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <VigenereStream prompt="Type here" />
    </Provider>,
  );
});
