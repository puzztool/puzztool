import { compareVersions } from "compare-versions";
import { version } from "../version";

const VERSION_STORAGE_KEY = "appVersion";
const STORAGE_KEY_PREFIX = "puzztool";
let isSupported: boolean;

function getKey(key: string) {
  return `${STORAGE_KEY_PREFIX}_${key}`;
}

function didVersionChange(prev: string | null, current: string) {
  try {
    if (prev) {
      return compareVersions(current, prev) !== 0;
    }
  } catch {
    // Something went wrong with parsing.
  }

  // If there's no existing version number or we had an exception while
  // comparing it, just return `true` to play it safe.
  return true;
}

function clearOnVersionMismatch() {
  const prevVersion = getLocalStorageItem(VERSION_STORAGE_KEY);
  if (didVersionChange(prevVersion, version)) {
    // If the current localstorage was created with another version of
    // PuzzTool, clear the local storage to get rid of any obsolete or
    // incompatible artifacts.
    clearLocalStorage();

    // Store the current version
    setLocalStorageItem(VERSION_STORAGE_KEY, version);
  }
}

function isLocalStorageSupported() {
  if (isSupported === undefined) {
    const storage = window.localStorage;
    const x = "__storage_test__";

    try {
      storage.setItem(x, x);
      storage.removeItem(x);
      isSupported = true;
    } catch (e) {
      isSupported =
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
    }

    if (isSupported) {
      clearOnVersionMismatch();
    }
  }

  return isSupported;
}

function getLocalStorageItem(key: string) {
  if (isLocalStorageSupported()) {
    return window.localStorage.getItem(getKey(key));
  }

  return null;
}

function setLocalStorageItem(key: string, value: string) {
  if (isLocalStorageSupported()) {
    window.localStorage.setItem(getKey(key), value);
  }
}

export function clearLocalStorage() {
  if (isLocalStorageSupported()) {
    window.localStorage.clear();
  }
}
