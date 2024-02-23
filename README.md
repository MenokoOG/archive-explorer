# React + Vite

 # V School Final Project: L. JEfferson II, Menoko OG

 # Archive Explorer Documentation

Archive Explorer is a React application designed to check the availability of web pages in the Wayback Machine's archive. It utilizes the Wayback Availability JSON API to find archived snapshots of websites and displays them to the user. This documentation covers the setup, architecture, and usage of Archive Explorer.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12.0.0 or later)
- npm (comes with Node.js)



## Application Structure

- `src/` - Source files for the application.
  - `components/` - Reusable components.
  - `views/` - Application pages.
  - `context/` - Contexts for state management.
  - `App.css` - Global stylesheet.
  - `App.jsx` - Main application component.
  - `main.jsx` - Entry point for the application.

## Key Components

### `App.jsx`

Serves as the root component, setting up the router and defining the main routes of the application.

### `HomePage.jsx`

Contains a form where users can input a URL to check its archive status. It uses the context to store and retrieve the URL and navigate to the results page upon submission.

### `ResultsPage.jsx`

Displays the results of the archive check. If an archived snapshot is available, it presents the snapshot details, including a link to view the archived page.

### `AboutPage.jsx`

Provides information about the Archive Explorer application, including its purpose and instructions for use.

## Context and State Management

### `ArchiveContext.jsx`

Manages the application state related to archive checks, including performing the API call and storing the results. It uses Axios for HTTP requests to the Wayback Availability JSON API.

## Styling

The application uses `App.css` for global styles. The design is responsive, ensuring the application is usable on devices of various sizes.

## Usage

1. **Checking Archive Status:**
   - Navigate to the home page.
   - Enter a URL in the input field.
   - Submit the form to see if the URL has an archived snapshot available.

2. **Viewing Results:**
   - If an archived snapshot is available, the results page will display its details.
   - Click on the link provided to view the archived page.

3. **About the Application:**
   - Visit the about page to learn more about Archive Explorer and how to use it.

## Development Tips

- Use the React Developer Tools extension for Chrome or Firefox to inspect and debug your application.
- Regularly test your application on different devices and browsers to ensure compatibility and responsiveness.

## Conclusion

Archive Explorer is a simple yet powerful tool for exploring the historical snapshots of websites archived by the Wayback Machine. By following this documentation, you should be able to set up, understand, and use the application effectively.