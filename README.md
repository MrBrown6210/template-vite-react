# Vite React Template

A boilerplate project for quickly build Web App using React

The app come with many built-in features, such as caching API using SWR, Mock API using MSW, integration tests using React Testing Library and, E2E testing using cypress, etc

## Quick Start

Clone project to create your project, simply run:

    git clone https://github.com/MrBrown6210/template-vite-react <project-name>

## Feature

- **Real-time experience API**: [SWR](https://swr.vercel.app/) React Hooks for Data Fetching
- **API mocking**: [Mock Service Worker](https://mswjs.io/)
- **Testing**: unit and integration tests using [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), and E2E Testing using [Cypress](https://www.cypress.io/)
- **Dependency management**: with [pNPM](https://pnpm.io/)
- **Git hooks**: with [husky](https://github.com/typicode/husky)
- **State Management**: with [zustand](https://github.com/pmndrs/zustand)

## Commands

Running locally:

    pnpm run dev

building:

    pnpm run build

Running production (build before use):

    pnpm run preview

Testing:

    # run all unit tests and integration tests
    yarn test

    # run unit tests and integration tests coverage
    yarn test:coverage

    # run unit tests and integration tests
    yarn test:CI

    # run e2e tests
    yarn cypress

## Enviroment Variable

The environment variables can be found in `.env.example` file. use these command to create `.env` file.

    cp .env.example .env

They come with these default values:

```
# Back-end API
VITE_API_URL=http://localhost:8000

# Enable API Mocking with MSW
VITE_MOCK_ENABLE=true
```

## Project Structure

```
src\
 |--api\            # Utilities for call API
 |--assets\    	    # Uncompiled assets such as your styles, images, or fonts
 |--components\     # React Components
 |--helper\         # Utilities
 |--hooks\          # Custom React Hooks
 |--layouts\        # App Layout Component (use with react-router-dom)
 |--mocks\          # Mock API and Mock Data
 |--pages\          # Page components for application routes
 |--stores\         # data-store with zustand
 |--test-utils\	    # Utilities for testing
 |--App.tsx         # Routes management
 |--main.tsx        # App entry point
 |--env.d.ts        # ENV definition type
```
