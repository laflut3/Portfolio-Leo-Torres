# Instructions for Codex

## Engineering Style

- Prefer the smallest correct change.
- Do not add abstractions, wrappers, helper layers, dependencies, configuration, or tooling unless they are clearly required by the task.
- Avoid defensive checks, fallbacks, validations, and error handling that are not needed for the requested behavior or an existing contract.
- Keep code direct, readable, and close to the current project style.
- Do not refactor unrelated code.
- Do not introduce broad architecture changes for narrow requests.

## React

- Treat this project as a React-focused codebase unless the existing files clearly show another framework.
- Use idiomatic modern React with function components, hooks, and simple composition.
- Keep components small only when it improves readability or reuse. Do not split components just to create structure.
- Prefer local state, props, and plain helpers before adding context, reducers, stores, custom hooks, or state libraries.
- Do not add React dependencies unless the requested feature clearly needs them.
- Use the existing package manager, scripts, router, styling approach, TypeScript setup, and framework conventions.
- Prefer built-in browser and Node.js APIs over third-party packages when they solve the problem cleanly.
- Keep async code simple: use `async`/`await` where it improves clarity, and avoid unnecessary Promise wrapping.
- Respect existing linting, formatting, TypeScript, and test setup if present.

## TypeScript

- Prefer TypeScript for React code.
- Keep types simple, explicit, and close to the data they describe.
- Avoid `any`. Use `unknown` when the value is genuinely unknown, then narrow it where needed.
- Do not create complex generics, utility types, schemas, or type layers unless they clearly reduce duplication or protect a real contract.
- Type component props with readable `type` aliases.
- Let TypeScript infer obvious local variables and return types when inference is clear.
- Type API responses, shared data models, and component boundaries explicitly.
- Do not silence TypeScript errors with casts or comments unless there is a concrete reason.
- Prefer discriminated unions for small UI states when they make impossible states unrepresentable.

## UX/UI Design

- For new app screens, visual redesigns, dashboards, landing pages, or any design-heavy React work, use the `build-web-apps:frontend-app-builder` skill.
- For shadcn/ui work, use the `build-web-apps:shadcn` skill and follow the installed project config.
- Start from the actual user workflow, then design the smallest complete interface that supports it.
- Build the usable app screen first, not a marketing wrapper.
- Aim for a polished, high-end product UI: precise spacing, strong typography, clean hierarchy, thoughtful states, responsive layout, and smooth interactions.
- Keep the UI clean, readable, responsive, and consistent with the existing design system.
- Use strong visual direction, but avoid generic decoration. Every section, card, animation, gradient, icon, and line of copy must serve the product experience.
- Use visual assets only when they improve the interface or are required by the task.

## Tailwind CSS

- Prefer Tailwind for styling when the project uses it.
- Use design tokens and semantic CSS variables when available instead of hardcoded colors.
- Keep class lists readable and purposeful. Extract a component only when repeated markup or class combinations become hard to scan.
- Use `flex` or `grid` with `gap-*` for spacing. Avoid `space-x-*` and `space-y-*`.
- Use `size-*` when width and height are equal.
- Use `truncate` instead of manual overflow, ellipsis, and whitespace classes.
- Do not add custom CSS unless Tailwind cannot express the design cleanly.
- Avoid one-off arbitrary values unless they are needed to match a specific design.

## shadcn/ui

- Prefer shadcn/ui components for common UI primitives: buttons, forms, dialogs, sheets, tabs, dropdowns, tables, cards, badges, tooltips, skeletons, and empty states.
- Use existing installed components before adding new ones.
- Use shadcn variants and semantic tokens before custom styling.
- Compose components correctly: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`; `TabsTrigger` inside `TabsList`; dialogs, sheets, and drawers with titles.
- Use `cn()` for conditional classes.
- Use `Badge`, `Separator`, `Skeleton`, `Alert`, and `sonner` instead of custom equivalents.
- For forms, prefer the project shadcn form primitives and accessible labels, descriptions, invalid states, and disabled states.
- Do not import a shadcn component that has not been added to the project.
- When adding or updating shadcn components, use the project package runner and read the generated files before continuing.

## Motion and GSAP

- Use GSAP for animation only when motion is part of the requested UX or meaningfully improves the product feel.
- Prefer subtle, fast, purposeful motion: entrance, reveal, hover, tab/content transitions, scroll-linked moments, and focus guidance.
- Do not animate everything. Motion should clarify hierarchy or state, not distract.
- Respect `prefers-reduced-motion`.
- Keep animations deterministic and easy to remove. Avoid complex timelines unless the interaction actually needs them.
- Clean up GSAP animations in React effects.

## Verification

- Run only the checks that are relevant to the change.
- Do not add tests or verification steps for behavior that was not changed or requested.
- If a quick local check is enough, prefer it over a full suite.
- Mention any checks that could not be run.

## Communication

- Be concise and concrete.
- Explain only decisions that affect the implementation.
- Surface assumptions when they matter.
