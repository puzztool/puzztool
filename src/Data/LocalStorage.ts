import compareVersions from 'compare-versions';
import { version } from '../version';

class LocalStorage {
  private static readonly VERSION_STORAGE_KEY = 'appVersion';
  private static readonly STORAGE_KEY_PREFIX = 'puzztool';
  private static _isSupported?: boolean;

  public static isSupported() {
    if (this._isSupported === undefined) {
      const storage = window.localStorage;
      const x = '__storage_test__';

      try {
        storage.setItem(x, x);
        storage.removeItem(x);
        this._isSupported = true;
      } catch (e) {
        this._isSupported = e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
      }

      if (this._isSupported) {
        this.clearOnVersionMismatch();
      }
    }

    return this._isSupported;
  }

  public static getItem(key: string) {
    if (this.isSupported()) {
      return window.localStorage.getItem(this.getKey(key));
    }

    return null;
  }

  public static getObject<T>(key: string) {
    if (this.isSupported()) {
      const objString = window.localStorage.getItem(this.getKey(key));

      if (objString !== null) {
        return JSON.parse(objString) as T;
      }
    }

    return null;
  }

  public static setItem(key: string, value: string) {
    if (this.isSupported()) {
      window.localStorage.setItem(this.getKey(key), value);
    }
  }

  public static setObject<T>(key: string, object: T) {
    if (this.isSupported()) {
      window.localStorage.setItem(this.getKey(key), JSON.stringify(object));
    }
  }

  public static clear() {
    if (this.isSupported()) {
      window.localStorage.clear();
    }
  }

  private static getKey(key: string) {
    return `${this.STORAGE_KEY_PREFIX}_${key}`;
  }

  private static didVersionChange(prev: string | null, current: string) {
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

  private static clearOnVersionMismatch() {
    const prevVersion = this.getItem(this.VERSION_STORAGE_KEY);
    if (this.didVersionChange(prevVersion, version)) {
      // If the current localstorage was created with another version of
      // PuzzTool, clear the local storage to get rid of any obsolete or
      // incompatible artifacts.
      this.clear();

      // Store the current version
      this.setItem(this.VERSION_STORAGE_KEY, version);
    }
  }
}

export default LocalStorage;
