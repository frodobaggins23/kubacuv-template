# Vite + React + TypeScript Template

This is a template repository for creating a Vite project with React and TypeScript. It includes a set of tools and configurations to help you get started quickly.

## Getting Started

### Prerequisites

- Node.js 22.x
- npm (comes with Node.js)

### Installation

1. Clone the repository:

2. Install dependencies:

  ```sh
  npm install
  ```

### Development

To start the development server:

```sh
npm run dev
```

This will start the Vite development server and open your project in the default web browser.

### Building for Production

To build the project for production:

```sh
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build:

```sh
npm run preview
```

### Linting and Formatting

To lint and format the code:

```sh
npm run lint
```

### Running Tests

To run the tests:

```sh
npm run test
```

This command executes all unit and component tests using Vitest. The template includes example component tests for `App.tsx` and `Boilerplate.tsx` (located in their respective `__tests__` subdirectories), demonstrating how to use React Testing Library for testing UI components, interactions, and props. You can run specific test files by passing the file path as an argument to the test script (e.g., `npm test -- src/pages/App/__tests__/App.test.tsx`).

### Generating Components

To generate a new component or page, use the `gc` script:

```sh
npm run gc -- -c ComponentName
npm run gc -- -p PageName
# or run without params for prompts in terminal
npm run gc
```

## Environment Variables

This project uses Vite's built-in support for environment variables. Variables prefixed with `VITE_` are exposed to your client-side code.

To define local environment variables:

1.  Create a `.env` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```
2.  Modify the values in the `.env` file as needed.
    For example:
    ```
    VITE_MESSAGE="My custom message for development"
    ```

The `.env` file is included in `.gitignore` by default in Vite projects and should not be committed to your repository.

You can access these variables in your code like this:
```javascript
const message = import.meta.env.VITE_MESSAGE;
console.log(message);
```

The `App.tsx` component in this boilerplate demonstrates reading `VITE_MESSAGE`.

### Deployment

This project is configured to deploy to Vercel. The deployment workflow is defined in `.github/workflows/vercel.yaml`.
