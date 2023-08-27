import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "../../../Store/configureStore";
import BrailleStream from "./BrailleStream";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  const root = createRoot(div);
  root.render(
    <Provider store={store}>
      <BrailleStream />
    </Provider>,
  );
});
