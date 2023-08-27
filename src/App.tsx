import { lazy, Suspense, useState } from "react";
import { Button } from "react-bootstrap";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import PuzzToolDocumentTitle from "./Common/PuzzToolDocumentTitle";
import AppNav from "./Features/AppNav";
import NotFound from "./Features/Error/NotFound";
import Loading from "./Features/Loading";
import ErrorIcon from "./Features/Loading/ErrorIcon";
import styles from "./App.module.scss";

const loadingDelay = 200;
const loadingTimeout = 10000;

function ErrorFallback(props: FallbackProps) {
  return (
    <div className={styles.loadError}>
      <ErrorIcon />
      <div>Failed to load content:</div>
      <pre>{props.error.message}</pre>
      <Button onClick={props.resetErrorBoundary}>Reload</Button>
    </div>
  );
}

function App() {
  const [resetCount, setResetCount] = useState(0);
  const location = useLocation();

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
  const Settings = lazy(() => import("./Features/Settings"));
  const WordSearch = lazy(() => import("./Features/WordSearch"));

  function onErrorBoundaryReset() {
    setResetCount(resetCount + 1);
  }

  return (
    <HelmetProvider>
      <PuzzToolDocumentTitle />
      <div>
        <AppNav />
        <div className={styles.content}>
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
                <Route path="/help/settings" element={<Settings />} />
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
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
