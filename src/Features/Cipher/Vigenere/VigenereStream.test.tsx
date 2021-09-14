import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "../../../Store/configureStore";
import VigenereStream from "./VigenereStream";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <VigenereStream prompt="Type here" />
    </Provider>,
    div
  );
});
