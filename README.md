# React Application

A React-based web application featuring a contact form with state management using custom hooks and routing.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-qc642y)

## Features

- **React 17** - Modern React with hooks
- **Client-side Routing** - Using `hookrouter` for navigation
- **Contact Form** - Interactive form with validation and localStorage persistence
- **Custom Hooks** - Reusable state management logic
- **Component-based Architecture** - Modular structure with separate pages and components

## Project Structure

```
/workspace
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── FormularzKontaktowy.js    # Contact form component
│   │   ├── FormularzKontaktowy.css   # Form styles
│   │   └── index.js        # Components export
│   ├── hooks/              # Custom React hooks
│   │   ├── useFormularzKontaktowy.js # Contact form state management
│   │   └── index.js        # Hooks export
│   ├── pages/              # Page components
│   │   ├── StronaGlowna.js # Home page
│   │   ├── Kontakt.js      # Contact page
│   │   └── index.js        # Pages export
│   ├── App.js              # Main application component
│   ├── routers.js          # Route definitions
│   ├── index.js            # Application entry point
│   └── style.css           # Global styles
├── package.json            # Project dependencies
└── README.md               # This file
```

## Tech Stack

- **React** ^17.0.0
- **React DOM** ^17.0.0
- **hookrouter** ^1.2.5 - Client-side routing
- **react-scripts** - Build tooling (Create React App)

## Getting Started

### Prerequisites

- Node.js (v12 or higher recommended)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

### Test

Run tests:
```bash
npm test
```

## Usage

### Navigation

The application has two main routes:
- **Home** (`/`) - Main landing page
- **Contact** (`/kontakt`) - Contact form page

Navigate using the top navigation bar.

### Contact Form

The contact form features:
- Name, surname, and email fields
- Form validation
- LocalStorage persistence for form state
- Submit confirmation message

## Component Overview

### App.js
Main application component that renders:
- `Header` - Displays greeting with user name from form state
- `Nav` - Navigation menu
- `Main` - Route-based page rendering
- `Aside` - Sidebar section
- `Footer` - Footer section

### Custom Hook: useFormularzKontaktowy
Manages contact form state with:
- `useReducer` for complex state management
- localStorage integration for persistence
- Actions for form submission and field changes

### Pages
- **StronaGlowna** - Home page component
- **Kontakt** - Contact page with form component

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App |

## License

This project is private.

## Learn More

- [React Documentation](https://reactjs.org/)
- [hookrouter Documentation](https://hookrouter.lostpebble.com/)
- [Create React App](https://create-react-app.dev/)
