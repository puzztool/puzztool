/** Split digit string into words on spaces, 0s, and 1s. */
export function splitWords(digits: string): string[] {
  return digits
    .split(/[\s01-]+/)
    .filter((w) => w.length > 0 && /[2-9]/.test(w));
}

/** Filter input to only digits, spaces, and dashes. */
export function filterDigitInput(value: string): string {
  return value.replace(/[^0-9 -]/g, "");
}
