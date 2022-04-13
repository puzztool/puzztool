import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import configureStore from "../../../Store/configureStore";
import AutoConvert from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  const root = createRoot(div);
  root.render(
    <Provider store={store}>
      <HelmetProvider>
        <AutoConvert />
      </HelmetProvider>
    </Provider>
  );
});
