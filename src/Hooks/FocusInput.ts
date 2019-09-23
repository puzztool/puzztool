import { useCallback } from 'react';

export function useFocusInput() {
  // This callback is only executed once per change of the returned variable.
  return useCallback(
    (node) => {
      if (node) {
        node.focus();
      }
    },
    []);
}
