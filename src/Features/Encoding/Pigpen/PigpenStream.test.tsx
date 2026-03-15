import { render } from "@/test-utils";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import PigpenStream from "./PigpenStream";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <PigpenStream />
    </Provider>,
  );
});
