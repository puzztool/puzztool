import { render } from "@/test-utils";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import Base64Stream from "./Base64Stream";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <Base64Stream prompt="Type here" />
    </Provider>,
  );
});
