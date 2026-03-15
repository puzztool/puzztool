import { render } from "@/test-utils";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { test } from "vitest";
import configureStore from "../../../Store/configureStore";
import Base64 from ".";

test("renders without crashing", () => {
  const { store } = configureStore();
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Base64 />
      </HelmetProvider>
    </Provider>,
  );
});
