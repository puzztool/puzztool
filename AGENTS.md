# AGENTS.md

## Project Overview

PuzzTool is a React-based Progressive Web App (PWA) for solving puzzles. It uses Mantine v8 for UI components, Redux Toolkit for state management, and Vite as the build tool.

## Development Environment

- **Runtime**: Node.js 22 LTS (a `shell.nix` is provided for NixOS users)
- **Package Manager**: npm

## Commands

- `npm start` — Start the Vite dev server
- `npm run build` — Type-check with `tsc` and build with Vite
- `npm run test:no-watch` — Run all tests once (vitest, equivalent to `vitest run`)
- `npm run lint` — Run ESLint
- `npm run format` — Format all files with Prettier
- `npm run format:check` — Check formatting without writing

## Before Committing

Always run the following before committing changes:

```sh
npm run format
npm run lint
npm run build
npm run test:no-watch
```

CI runs both `lint` and `format:check` separately, so even if the build succeeds locally, formatting issues will cause CI failures.

## Project Structure

- `src/Features/` — Feature components organized by category (Encoding, Cipher, etc.)
- `src/Data/RouteData.ts` — Route definitions for all tools
- `src/Store/` — Redux store configuration
- `src/Common/` — Shared components (PuzzToolPage, ReferenceList, etc.)
- `src/App.tsx` — Route registration (lazy-loaded components)

## Adding a New Tool

1. Create a directory under the appropriate category in `src/Features/`
2. Add a Redux slice (`*Slice.ts`), stream component, page wrapper (`index.tsx`), and tests
3. Register the reducer in the category's `*Reducer.ts` (e.g., `encodingReducer.ts`)
4. Add the route entry in `src/Data/RouteData.ts` — include an `icon` (from `@tabler/icons-react`)
5. Add the lazy import and `<Route>` in `src/App.tsx`

### Conventions for new tool UIs

- **Clear buttons**: Use `Common/ClearButton` (confirmation modal) instead of a plain `<Button>`. This prevents accidental data loss and keeps UX consistent across all tools.
- **Tabbed tools**: Model `selectedTab` as `selectedTab?: string` (optional). Normalize Mantine's `null` to `undefined` in the reducer (`action.payload ?? undefined`). See `morseEncodingSlice.ts` for the pattern.
- **Imports from puzzle-lib**: Use subpath imports (e.g., `puzzle-lib/morse`, `puzzle-lib/phone`) instead of the root barrel export.
- **External links**: Always use `https://` URLs. Add `rel="noreferrer"` and `target="_blank"`.

## Testing

- Tests use Vitest with `@testing-library/react`
- Test utilities are in `src/test-utils.tsx` (imported as `@/test-utils`)
- Tests do **not** use `@testing-library/jest-dom` — use `toBeDefined()` and `getAttribute()` instead of `toBeInTheDocument()` and `toHaveAttribute()`

## Code Style

- TypeScript with strict mode
- Prettier for formatting (runs in CI)
- ESLint with `@typescript-eslint/recommended` and `prettier` config
- Path alias: `@/*` maps to `src/*`
