import { lazy, Suspense, useState } from "react";
import { AppShell, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import PuzzToolDocumentTitle from "./Common/PuzzToolDocumentTitle";
import UpdatePrompt from "./Common/UpdatePrompt";
import AppNav from "./Features/AppNav";
import NotFound from "./Features/Error/NotFound";
import Loading from "./Features/Loading";
import ErrorIcon from "./Features/Loading/ErrorIcon";
import SettingsDrawer from "./Features/Settings";
import styles from "./App.module.scss";

const loadingDelay = 200;
const loadingTimeout = 10000;

const Autokey = lazy(() => import("./Features/Cipher/Autokey"));
const Caesar = lazy(() => import("./Features/Cipher/Caesar"));
const Vigenere = lazy(() => import("./Features/Cipher/Vigenere"));
const AutoConvert = lazy(() => import("./Features/Encoding/AutoConvert"));
const Braille = lazy(() => import("./Features/Encoding/Braille"));
const Character = lazy(() => import("./Features/Encoding/Character"));
const Morse = lazy(() => import("./Features/Encoding/Morse"));
const Nato = lazy(() => import("./Features/Encoding/Nato"));
const NavalFlag = lazy(() => import("./Features/Encoding/NavalFlag"));
const Semaphore = lazy(() => import("./Features/Encoding/Semaphore"));
const Home = lazy(() => import("./Features/Home"));
const Pigpen = lazy(() => import("./Features/Pigpen"));
const Resistor = lazy(() => import("./Features/Resistor"));
const WordSearch = lazy(() => import("./Features/WordSearch"));

function isChunkLoadError(error: Error): boolean {
  return (
    error.name === "ChunkLoadError" ||
    error.message.includes("Failed to fetch dynamically imported module") ||
    error.message.includes("Loading chunk") ||
    error.message.includes("Loading CSS chunk")
  );
}

function ErrorFallback(props: FallbackProps) {
  const chunkError = isChunkLoadError(props.error);

  return (
    <div className={styles.loadError}>
      <ErrorIcon />
      <div>
        {chunkError
          ? "The app has been updated. Please refresh to load the latest version."
          : "Failed to load content:"}
      </div>
      {!chunkError && <pre>{props.error.message}</pre>}
      <Button onClick={() => window.location.reload()}>Refresh</Button>
    </div>
  );
}

function App() {
  const [resetCount, setResetCount] = useState(0);
  const location = useLocation();
  const [settingsOpened, { open: openSettings, close: closeSettings }] =
    useDisclosure();

  function onErrorBoundaryReset() {
    setResetCount(resetCount + 1);
  }

  return (
    <HelmetProvider>
      <PuzzToolDocumentTitle />
      <AppShell header={{ height: 60 }} padding={{ base: "xs", sm: "md" }}>
        <AppNav onSettingsOpen={openSettings} />
        <AppShell.Main className={styles.content}>
          <UpdatePrompt />
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            key={`${location.key}_${resetCount}`}
            onReset={onErrorBoundaryReset}
          >
            <Suspense
              fallback={
                <Loading delay={loadingDelay} timeout={loadingTimeout} />
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cipher/autokey" element={<Autokey />} />
                <Route path="/cipher/caesar" element={<Caesar />} />
                <Route path="/cipher/vigenere" element={<Vigenere />} />
                <Route path="/encoding/autoconvert" element={<AutoConvert />} />
                <Route path="/encoding/braille" element={<Braille />} />
                <Route path="/encoding/morse" element={<Morse />} />
                <Route path="/encoding/pigpen" element={<Pigpen />} />
                <Route path="/encoding/semaphore" element={<Semaphore />} />
                <Route
                  path="/reference/characterencodings"
                  element={<Character />}
                />
                <Route path="/reference/nato" element={<Nato />} />
                <Route path="/reference/navalflags" element={<NavalFlag />} />
                <Route path="/reference/resistors" element={<Resistor />} />
                <Route path="/solvers/wordsearch" element={<WordSearch />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </AppShell.Main>
      </AppShell>
      <SettingsDrawer opened={settingsOpened} onClose={closeSettings} />
    </HelmetProvider>
  );
}

export default App;
