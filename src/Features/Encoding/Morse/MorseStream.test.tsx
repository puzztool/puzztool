import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "../../../Store/configureStore";
import MorseStream from "./MorseStream";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  const root = createRoot(div);
  root.render(
    <Provider store={store}>
      <MorseStream />
    </Provider>
  );
});
