# Agent Guidelines for lofi-dev-portfolio

This document provides essential guidelines for coding agents working on this lofi-themed developer portfolio.

## Build Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Overview

A React + TypeScript portfolio with a lofi aesthetic featuring:
- Interactive bookshelf with project/skill information
- AI-powered chat interface (Google Gemini)
- Parallax mouse movements
- Responsive design with scaling
- Rain window animation

## Code Style Guidelines

### Imports

Order: React → local components → types/constants → external libraries
```typescript
import React, { useState, useEffect, useCallback } from 'react';
import ComponentName from './components/ComponentName';
import { TypeName } from './types';
import { CONSTANT_NAME } from './constants';
import { IconName } from 'lucide-react';
```

### Component Structure

```typescript
import React from 'react';

interface ComponentNameProps {
  requiredProp: string;
  optionalProp?: number;
  onCallback: (value: string) => void;
}

const ComponentName: React.FC<ComponentNameProps> = ({ requiredProp, onCallback }) => {
  return <div>content</div>;
};

export default ComponentName;
```

### Types & Interfaces

- Define interfaces in `types.ts` for shared data structures
- Use PascalCase for interface names
- Add `Props` suffix for component props interfaces
- Use enums for state constants (e.g., `ViewState`)

### Naming Conventions

- Components: PascalCase (`Bookshelf`)
- Functions/variables: camelCase (`handleMouseClick`)
- Constants: UPPER_SNAKE_CASE (`BOOKS_DATA`, `SYSTEM_INSTRUCTION`)
- Files: PascalCase for components (`ChatInterface.tsx`), lowercase for utilities (`types.ts`)

### State Management

```typescript
const [state, setState] = useState<Type>(initialValue);
const [isLoading, setIsLoading] = useState(false);

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  setState(newValue);
}, [dependencies]);
```

### Styling

- Use Tailwind CSS for all styling
- Custom animations defined in global CSS (if needed)
- Use utility classes for responsive design (`mobile:`, `md:`, `lg:`)
- Prefixed semantic color classes like `bg-lofi-wall`, `bg-lofi-glass`

### Error Handling

```typescript
try {
  const result = await apiCall();
  return result;
} catch (error) {
  console.error("Operation failed:", error);
  return fallbackValue; // Graceful fallback for user-facing features
}
```

### Hooks

- Use `useEffect` for side effects with proper cleanup
- Use `useCallback` for handlers passed to children
- Avoid unnecessary re-renders by memoizing expensive computations

### API Integration

- External API keys should be accessed via environment variables
- Use `process.env.API_KEY` pattern (configured in vite.config.ts)
- Provide fallback values when API is unavailable
- Always wrap API calls in try/catch

### TypeScript

- Strict mode enabled in tsconfig.json
- Use explicit type annotations for props
- Avoid `any` type - use `unknown` or specific interfaces
- Enable `allowImportingTsExtensions` for direct .tsx imports

### Component Best Practices

- Keep components focused and single-responsibility
- Extract complex logic into utility functions or hooks
- Use TypeScript interfaces for props (not inline object types)
- Define props interfaces above the component
- Use default props sparingly; prefer optional props with defaults

### File Organization

```
/
├── components/       # Reusable UI components
├── services/         # API integrations (e.g., geminiService.ts)
├── types.ts          # TypeScript interfaces and types
├── constants.ts      # App constants and data
├── App.tsx           # Main application component
├── index.tsx         # Entry point
└── index.html        # HTML template
```

### Accessibility

- Use semantic HTML elements
- Add appropriate ARIA labels when needed
- Ensure keyboard navigation support
- Provide clear visual feedback for interactions

## Testing

No test framework is currently configured. When adding tests:
- Choose a framework compatible with Vite + React (Vitest is recommended)
- Configure package.json with test scripts
- Add single test execution command (e.g., `npm test -- ComponentName`)

## Environment Variables

API keys and secrets should be:
- Defined in `.env.local` (not committed)
- Loaded via Vite's `loadEnv` in vite.config.ts
- Accessed as `process.env.VARIABLE_NAME`

## Dependencies

Key libraries:
- React 19.x
- TypeScript 5.8.x
- Vite 6.x (build tool)
- Tailwind CSS (styling - assumed from class usage)
- Lucide React (icons)
- @google/genai (AI chat integration)

## Code Quality Notes

- No linting tool is currently configured
- Consider adding ESLint and Prettier for consistency
- Run `npm run build` to verify TypeScript compilation
- Test responsive behavior on mobile (<768px) and desktop
