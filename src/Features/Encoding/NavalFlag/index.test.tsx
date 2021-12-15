import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import NavalFlag from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HelmetProvider>
      <NavalFlag />
    </HelmetProvider>,
    div
  );
});
