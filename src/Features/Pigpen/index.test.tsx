import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import Pigpen from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HelmetProvider>
      <Pigpen />
    </HelmetProvider>,
    div
  );
});
