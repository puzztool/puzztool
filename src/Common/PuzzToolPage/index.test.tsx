import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import PuzzToolPage from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HelmetProvider>
      <PuzzToolPage title="Test Page">Hi!</PuzzToolPage>
    </HelmetProvider>,
    div
  );
});
