import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import Nato from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HelmetProvider>
      <Nato />
    </HelmetProvider>,
    div
  );
});
