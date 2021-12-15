import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import PuzzToolDocumentTitle from "./PuzzToolDocumentTitle";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HelmetProvider>
      <PuzzToolDocumentTitle />
    </HelmetProvider>,
    div
  );
});
