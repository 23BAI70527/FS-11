📌 Title
Implementation of a Multi-Page React Application using React Router with Light/Dark Theme Toggle

🎯 Aim
To develop a multi-page React application using React Router and implement a Light/Dark theme toggle feature for enhanced user experience.

📖 Objective

1.To understand and implement routing in React using React Router.
2.To create multiple pages within a single-page application (SPA).
3.To implement navigation between pages without reloading the browser.
4.To apply conditional styling using Light and Dark mode themes.
5.To improve UI alignment and responsive layout design.

🛠 Tools Used

1.React.js – Frontend JavaScript library
2.React Router DOM – For navigation and routing
3.JavaScript (ES6) – Application logic
4.HTML5 – Structure
5.CSS3 – Styling and theme implementation
6.VS Code – Code editor
7.Node.js & npm – Package management

📚 Theory
1. Single Page Application (SPA)

A Single Page Application loads a single HTML page and dynamically updates the content without refreshing the entire page. React is widely used to build SPAs.

2. React Router

React Router enables navigation between different components in a React application without reloading the page.

Main components used:

BrowserRouter – Wraps the application to enable routing.

Routes – Groups all route components.

Route – Defines individual paths and components.

Link – Used for navigation between pages.

3. useState Hook

The useState hook is used to manage state inside functional components.
In this project, it is used to toggle between Light and Dark mode.

4. Conditional Styling

CSS classes are applied conditionally based on state.
If dark mode is enabled, a dark class is added to the main container to apply dark theme styles.

📂 Folder Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── CardComponent.jsx
│   ├── ThemeToggle.jsx
│   └── FilterBar.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx / Contact.jsx   
│   └── Analytics.jsx / Cart.jsx / RSVP.jsx  
│
├── App.jsx
├── main.jsx
└── index.css

💻 Project Description

This project is a multi-page React application built using React Router. It consists of four pages:

1.Home
2.Projects
3.Analytics
4.Contact

A navigation bar is implemented to switch between these pages smoothly without refreshing the browser.

Additionally, a Theme Toggle Button is provided to switch between Light Mode and Dark Mode dynamically using React state management.
The layout is properly aligned using CSS Flexbox, and content is centered for better visual presentation.

✅ Result

1.Successfully implemented multi-page navigation using React Router.
2.Light and Dark theme toggle works correctly.
3.Content is displayed properly in both themes.
4.Pages are aligned and styled professionally.
5.Navigation works without page reload (SPA behavior confirmed).

🎓 Learning Outcome

1.After completing this experiment, I learned:
2.How to create and manage routing in React.
3.How to use useState for dynamic UI updates.
4.How to implement theme switching using conditional CSS classes.
5.How to structure a React project properly.
6.How Single Page Applications work.
7.How to improve UI alignment and styling using CSS Flexbox.