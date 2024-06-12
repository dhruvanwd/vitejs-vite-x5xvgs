# Simple Counter App

A simple counter application built with React and RxDux-State-Manager to demonstrate state management using RxJS. This project showcases how to manage and update state efficiently in a React application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [State Management](#state-management)
  - [Counter Component](#counter-component)
  - [App Component](#app-component)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple counter application that demonstrates the use of RxDux-State-Manager for state management in a React application. The app consists of three counters that can be incremented, decremented, and reset independently.

## Features

- Increment and decrement individual counters.
- Reset all counters to zero.
- Demonstrates efficient state management using RxJS.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/simple-counter-app.git
cd simple-counter-app
```

2. Install the dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Usage

The application consists of three counters, each with its own increment and decrement buttons. There is also a button to reset all counters to zero.

## Code Overview

### State Management

State management is handled by RxDux-State-Manager. The state manager is initialized in the `rxduxStore.ts` file.

```typescript
// src/rxduxStore.ts

import { easyStateManager } from "rxdux-state-manager";

export const {
  useStateManager: useGlobalState,
  $state: $globalState,
  updateState: updateGlobalState,
} = easyStateManager({
  counters: [0, 0, 0], // Initial state with three counters
});

export const counterActions = {
  increment: (index: number) => {
    updateGlobalState((draft) => {
      draft.counters[index]++;
    });
  },
  decrement: (index: number) => {
    updateGlobalState((draft) => {
      draft.counters[index]--;
    });
  },
  reset: () => {
    updateGlobalState((draft) => {
      draft.counters = [0, 0, 0];
    });
  },
};
```

### Counter Component

The `Counter` component is used to display and control each counter.

```typescript
// src/Counter.tsx

import React from "react";
import { useGlobalState, counterActions } from "./rxduxStore";

interface CounterProps {
  index: number;
}

const Counter: React.FC<CounterProps> = ({ index }) => {
  const { counters } = useGlobalState("counters");

  return (
    <div className="counter">
      <p>Counter {index + 1}: {counters[index]}</p>
      <button onClick={() => counterActions.increment(index)}>Increment</button>
      <button onClick={() => counterActions.decrement(index)}>Decrement</button>
    </div>
  );
};

export default Counter;
```

### App Component

The `App` component includes multiple `Counter` components and a reset button.

```typescript
// src/App.tsx

import React from "react";
import Counter from "./Counter";
import { counterActions } from "./rxduxStore";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <Counter index={0} />
      <Counter index={1} />
      <Counter index={2} />
      <button onClick={counterActions.reset}>Reset All Counters</button>
    </div>
  );
};

export default App;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to replace `"your-username"` in the GitHub URL with your actual GitHub username. This README provides a comprehensive guide for users to understand and get started with the Simple Counter App project.