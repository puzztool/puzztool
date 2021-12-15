import { HelmetProvider } from "react-helmet-async";
import Loadable from "react-loadable";
import { Route, Routes } from "react-router-dom";
import PuzzToolDocumentTitle from "./Common/PuzzToolDocumentTitle";
import AppNav from "./Features/AppNav";
import NotFound from "./Features/Error/NotFound";
import Loading from "./Features/Loading";
import styles from "./App.module.scss";

const defaultTimeout = 10000;

const WordSearch = Loadable({
  loader: () => import("./Features/WordSearch"),
  loading: Loading,
  timeout: defaultTimeout,
});

const AutoConvert = Loadable({
  loader: () => import("./Features/Encoding/AutoConvert"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Autokey = Loadable({
  loader: () => import("./Features/Cipher/Autokey"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Braille = Loadable({
  loader: () => import("./Features/Encoding/Braille"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Caesar = Loadable({
  loader: () => import("./Features/Cipher/Caesar"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Character = Loadable({
  loader: () => import("./Features/Encoding/Character"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Home = Loadable({
  loader: () => import("./Features/Home"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Morse = Loadable({
  loader: () => import("./Features/Encoding/Morse"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Nato = Loadable({
  loader: () => import("./Features/Encoding/Nato"),
  loading: Loading,
  timeout: defaultTimeout,
});

const NavalFlag = Loadable({
  loader: () => import("./Features/Encoding/NavalFlag"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Pigpen = Loadable({
  loader: () => import("./Features/Pigpen"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Resistor = Loadable({
  loader: () => import("./Features/Resistor"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Semaphore = Loadable({
  loader: () => import("./Features/Encoding/Semaphore"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Settings = Loadable({
  loader: () => import("./Features/Settings"),
  loading: Loading,
  timeout: defaultTimeout,
});

const Vigenere = Loadable({
  loader: () => import("./Features/Cipher/Vigenere"),
  loading: Loading,
  timeout: defaultTimeout,
});

function App() {
  return (
    <HelmetProvider>
      <PuzzToolDocumentTitle />
      <div>
        <AppNav />
        <div className={styles.content}>
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
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
