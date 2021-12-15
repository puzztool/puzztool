import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import configureStore from "../../../Store/configureStore";
import Semaphore from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <HelmetProvider>
        <Semaphore />
      </HelmetProvider>
    </Provider>,
    div
  );
});
