# React Counter App with Advanced Features

This project is a React and TypeScript counter application demonstrating core React concepts such as state management with `useState`, side effects and cleanup with `useEffect`, and modular design through custom hooks and components. The app includes core counter functionality enhanced with features like step control, history tracking, local storage persistence, keyboard navigation, and reset capability.

## Live Demo

A live version of this app is available at:  
[https://thunderous-pudding-b11ff1.netlify.app/](https://thunderous-pudding-b11ff1.netlify.app/)

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Component Overview](#component-overview)
- [Custom Hooks](#custom-hooks)
- [Implementation Highlights](#implementation-highlights)
- [Reflection](#reflection)
- [License](#license)

---

## Features

### Core Functionality
- Display the current count (initialized to 0)
- Increment and decrement buttons with configurable step value

### Advanced Features
- **Step Input:** User-defined increment/decrement step size
- **History Tracking:** Maintain and display a list of previous count values
- **Auto-Save:** Persist current count to `localStorage` automatically
- **Keyboard Controls:** Use ArrowUp/ArrowDown keys to increment/decrement
- **Reset Mechanism:** Reset both the count and history to initial state

---

## Project Structure

```
src/
├── components/
│   ├── AdvancedCounter/
│   │   └── AdvancedCounter.tsx
│   ├── CounterControls/
│   │   ├── CounterControls.tsx
│   │   └── styles.module.css
│   ├── CounterDisplay/
│   │   └── CounterDisplay.tsx
│   ├── HistoryList/
│   │   └── HistoryList.tsx
│   └── StepInput/
│       └── StepInput.tsx
│
├── hooks/
│   ├── useHistoryTracker.ts
│   ├── useKeyboardControls.ts
│   └── useLocalStorageSync.ts
│
├── App.tsx
└── App.css
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-counter-app.git
cd react-counter-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## Usage

Open your browser and go to:

```
http://localhost:5173
```

You can interact with the app by:

- Clicking the increment and decrement buttons to change the count.
- Setting a custom step value in the input field to control the increment/decrement amount.
- Using the ArrowUp and ArrowDown keys on your keyboard to change the count.
- Viewing the full history of count values below the counter.
- Resetting the count and history with the reset button.

The current count value is persisted automatically using `localStorage` so your progress is saved across sessions.

---

## Component Overview

### `AdvancedCounter.tsx`

The main component that handles the count and step states, integrates the custom hooks, and renders all child components. It coordinates updating the count, resetting state, syncing to localStorage, and handling keyboard input.

### `CounterControls.tsx`

Renders the increment, decrement, and reset buttons. It receives handler callbacks as props to trigger the respective actions in the parent component.

### `StepInput.tsx`

An input component that allows users to set the increment/decrement step value. It validates input and informs the parent component of changes.

### `CounterDisplay.tsx`

Displays the current count prominently on the screen and provides accessibility attributes to announce changes.

### `HistoryList.tsx`

Shows a list of all previous count values as a comma-separated string. Displays a message when there is no history.

---

## Custom Hooks

### `useHistoryTracker.ts`

Tracks the array of previous count values and exposes a method to clear the history.

### `useKeyboardControls.ts`

Adds event listeners for the ArrowUp and ArrowDown keys, calling the increment or decrement handlers respectively. Includes cleanup on component unmount.

### `useLocalStorageSync.ts`

Watches a key and value, syncing the value to localStorage whenever it changes. Uses cleanup logic to prevent stale writes.

---

## Implementation Highlights

- Uses `useState` for managing local component state such as the count, step value, and history.
- Uses `useEffect` to handle side effects:
  - Listening and cleaning up keyboard events.
  - Syncing count to localStorage with proper cleanup.
  - Updating history whenever count changes.
- Applies proper cleanup for all effects to avoid memory leaks or race conditions.
- Components and hooks are modularized for readability and reuse.

---

## Reflection

This project reinforced fundamental React concepts, particularly the use of hooks and managing side effects cleanly. Challenges included handling multiple side effects simultaneously and ensuring the state and storage stayed synchronized without causing excessive renders or stale data writes. Splitting logic into custom hooks made the codebase more maintainable and easier to reason about.

If given more time, possible improvements include:
- Adding comprehensive testing with React Testing Library.
- Improving accessibility features.
- Adding animations or transitions for better user experience.
- Enhancing UI styling and responsiveness.
- Implementing persistent history with timestamps or metadata.

---

## License

This project is intended for educational purposes as part of a software engineering training curriculum.
