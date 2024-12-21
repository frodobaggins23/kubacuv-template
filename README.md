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

3. Create a `.env.local` file in the root directory and add your environment variables:

  ```sh
  echo 'VITE_MESSAGE="Your secret message"' > .env.local
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

### Generating Components

To generate a new component or page, use the `gc` script:

```sh
npm run gc -- -c ComponentName
npm run gc -- -p PageName
# or run without params for prompts in terminal
npm run gc
```

### Deployment

This project is configured to deploy to Vercel. The deployment workflow is defined in `.github/workflows/vercel.yaml`.

## License

This project is licensed under the MIT License.