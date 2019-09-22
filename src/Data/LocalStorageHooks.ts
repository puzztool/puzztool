import { useEffect } from 'react';
import LocalStorage from './LocalStorage';

export function useLocalStorage<T>(
  localStorageKey: string,
  onRestoreState: (state: T | null) => void,
  onSaveState: () => T) {
  // This effect only runs on the first mount of the control or whenever the
  // `localStorageKey` value changes. `onRestoreState` is intentionally omitted
  // since each call will have a unique version of the function.
  useEffect(
    () => onRestoreState(LocalStorage.getObject<T>(localStorageKey)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [localStorageKey]);

  // This effect runs on every update of the control because the deps parameter
  // is intentionally omitted.
  useEffect(() => LocalStorage.setObject(localStorageKey, onSaveState()));
}
