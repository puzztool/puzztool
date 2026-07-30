import { act } from "@testing-library/react";
import { render, screen } from "@/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import Loading from ".";

afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
});

test("renders without crashing", () => {
  render(<Loading />);
});

test("shows loader immediately when no delay is set", () => {
  render(<Loading />);
  expect(screen.getByRole("status")).toBeDefined();
});

test("hides loader initially when delay is set", () => {
  vi.useFakeTimers();
  render(<Loading delay={200} />);
  expect(screen.queryByRole("status")).toBeNull();
});

test("shows loader after delay elapses", () => {
  vi.useFakeTimers();
  render(<Loading delay={200} />);
  act(() => vi.advanceTimersByTime(200));
  expect(screen.getByRole("status")).toBeDefined();
});

test("shows loader immediately when delay is 0", () => {
  render(<Loading delay={0} />);
  expect(screen.getByRole("status")).toBeDefined();
});
