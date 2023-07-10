# React App created with Vite

This repository contains a React application created using Vite for a School CSM. Vite is a fast and flexible build tool for modern web applications. It optimizes the bundling process and provides an instant development experience.

## Features

- **Fast development:** Vite leverages ES module imports to achieve instant hot module replacement (HMR) and fast builds.
- **Optimized bundling:** Vite uses Rollup under the hood to generate highly optimized and small production bundles.
- **React framework:** This project utilizes React, a popular JavaScript library for building user interfaces.
- **Routing:** React Router is integrated to handle client-side routing and enable a smooth single-page application (SPA) experience.
- **CSS Modules:** Styles are scoped locally by default using CSS Modules, allowing for better encapsulation and maintainability.
- **Code formatting:** Prettier is set up to enforce consistent code formatting and improve code quality.
- **Linting:** ESLint is configured to catch and report code errors, enforcing best practices and maintainability.

## Getting Started

### Prerequisites

To run this project locally, you need to have the following software installed on your machine:

- Node.js (v14.0.0 or later)
- yarn

### Installation

1. Clone this repository to your local machine or download the ZIP file.

```bash
git clone https://github.com/Yathaartha/geezerbuild-app
```

2. Navigate to the project's root directory.

```bash
cd geezerbuild-app
```

3. Install the project dependencies.

```bash
yarn
```

### Development

To start the development server, run the following command:

```bash
yarn start
```

This command will build the project and open it in your default browser. Any changes you make to the source code will trigger an automatic reload.

### Build

To build the application for production, run the following command:

```bash
yarn build
```

The optimized and minified production-ready files will be placed in the `dist` directory.

### Deployment

You can deploy the application to a hosting platform of your choice. Simply copy the contents of the `dist` directory to your server or use a deployment tool.

## Project Structure

Here's an overview of the project structure:

```
geezerbuild-app/
  |- src/
  |  |- api/
  |  |- app/
  |  |- assets/
  |  |- components/
  |  |- views/
  |  |- App.jsx
  |  |- main.jsx
  |- public/
  |- index.html
  |- vite.config.js
  |- package.json
  |- README.md
  |- yarn.lock
```

## Screenshots

![Login Page](/src/assets/images/login-page.png)

![Assignments Page](/src/assets/images/assignments-page.png)

![Submissions Page](/src/assets/images/submissions-page.png)
