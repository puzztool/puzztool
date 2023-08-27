import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { it } from "vitest";
import configureStore from "../../../Store/configureStore";
import SemaphoreStream from "./SemaphoreStream";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  const root = createRoot(div);
  root.render(
    <Provider store={store}>
      <SemaphoreStream />
    </Provider>,
  );
});
