import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "../../../Store/configureStore";
import AutoConvert from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const { store } = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <AutoConvert />
    </Provider>,
    div
  );
});
