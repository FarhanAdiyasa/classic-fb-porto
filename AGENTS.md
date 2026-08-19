# Agent Guidelines — classic-fb-portfolio

## Architectural & Code Conventions

### TypeScript & Interfaces
- Define shared interfaces in `types.ts` using PascalCase.
- Name component prop interfaces with the `Props` suffix (`ComponentNameProps`).
- Use explicit type annotations for component props; use `unknown` or specific interfaces rather than un-typed values.
- Group constants in `constants.ts` using `UPPER_SNAKE_CASE`.

### Component Structure & Co-location
- Keep component definition, prop interface, and related types co-located in the component file unless shared across components.
- File naming: PascalCase for React components (`ChatInterface.tsx`), lowercase for utilities and type definitions (`types.ts`).
- Event handlers passed to child components wrapped in `useCallback`.
- External service calls (e.g., Gemini API in `services/`) wrapped in error boundaries with user-facing fallback states.

### Styling & UI
- Use Tailwind CSS utility classes exclusively.
- Prefixed semantic theme classes: `bg-lofi-wall`, `bg-lofi-glass`.
- Include responsive variants (`sm:`, `md:`, `lg:`) and ARIA labels on all interactive elements.

### Verification Criteria
- Run `npm run build` to verify TypeScript compilation before declaring any code change complete.
