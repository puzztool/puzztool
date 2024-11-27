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

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter
          basename={baseUrl}
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
