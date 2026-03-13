import { MantineProvider } from "@mantine/core";
import {
  render as rtlRender,
  RenderOptions,
  screen,
  fireEvent,
  waitFor,
  within,
  cleanup,
} from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function AllProviders({ children }: { children: ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}

function render(ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) {
  return rtlRender(ui, { wrapper: AllProviders, ...options });
}

export { render, screen, fireEvent, waitFor, within, cleanup };
