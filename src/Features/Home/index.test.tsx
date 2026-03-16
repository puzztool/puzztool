import { render, screen } from "@/test-utils";
import { BrowserRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Home from ".";

function renderHome() {
  return render(
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Home />
    </BrowserRouter>,
  );
}

test("renders without crashing", () => {
  renderHome();
});

test("renders category headings", () => {
  renderHome();
  expect(screen.getByText("Solvers")).toBeDefined();
  expect(screen.getByText("Ciphers")).toBeDefined();
  expect(screen.getByText("Encodings")).toBeDefined();
  expect(screen.getByText("Reference")).toBeDefined();
});

test("renders tool cards with links", () => {
  renderHome();
  const wordSearchLink = screen.getByText("Word Search").closest("a");
  expect(wordSearchLink?.getAttribute("href")).toBe("/solvers/wordsearch");

  const caesarLink = screen.getByText("Caesar").closest("a");
  expect(caesarLink?.getAttribute("href")).toBe("/cipher/caesar");
});
