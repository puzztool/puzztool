import { useEffect, useLayoutEffect } from 'react';
import LocalStorage from '../Data/LocalStorage';

export function useLocalStorage<T>(
  localStorageKey: string,
  onRestoreState: (state: T | null) => void,
  onSaveState: () => T) {
  // This effect runs synchronously on the first mount of the control or
  // whenever the `localStorageKey` value changes. This is to ensure that there
  // is no flickering as the data is rendered. `onRestoreState` is intentionally
  // omitted from deps since each call will have a unique version of the
  // function.
  useLayoutEffect(
    () => onRestoreState(LocalStorage.getObject<T>(localStorageKey)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [localStorageKey]);

  // This effect runs on every update of the control because the deps parameter
  // is intentionally omitted.
  useEffect(() => LocalStorage.setObject(localStorageKey, onSaveState()));
}
