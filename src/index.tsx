import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import configureStore from "./Store/configureStore";
import "./index.scss";

const baseUrl = import.meta.env.BASE_URL;
const { store, persistor } = configureStore();

const theme = createTheme({
  primaryColor: "blue",
  components: {
    Card: {
      defaultProps: {
        padding: "md",
      },
    },
    Button: {
      defaultProps: {
        size: "md",
      },
    },
    TextInput: {
      defaultProps: {
        size: "md",
      },
    },
    Textarea: {
      defaultProps: {
        size: "md",
      },
    },
    SegmentedControl: {
      defaultProps: {
        size: "md",
      },
    },
  },
});

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter
            basename={baseUrl}
            future={{
              v7_relativeSplatPath: true,
              v7_startTransition: true,
            }}
          >
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </MantineProvider>
  </StrictMode>,
);
