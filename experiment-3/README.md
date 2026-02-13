
📌 Experiment 3 – Multi-Page React Application using React Router

🏷️ Title: Implementation of Multi-Page Navigation in React using React Router

🎯 AIM:
To develop a multi-page React application using React Router and extend the existing project by adding a new webpage related to the chosen theme.

🎯 OBJECTIVE:
1.To understand the concept of client-side routing in React.
2.To implement navigation between multiple pages using React Router.
3.To maintain consistent UI across different pages.
4.To extend the existing webpage by adding a new related page.
5.To improve structuring and modularization of React applications.

📘 THEORY:
🔹 React Router:

React Router is a standard library used in React to enable navigation between different components or pages without reloading the browser. It allows the creation of a Single Page Application (SPA) where content changes dynamically.

🔹 Single Page Application (SPA):

A Single Page Application loads a single HTML page and dynamically updates content as the user interacts with the application. Unlike traditional websites, it does not reload the entire page during navigation.

🔹 Important Components Used:
1.BrowserRouter – Wraps the application and enables routing.
2.Routes – A container that groups all route definitions.
3.Route – Defines the mapping between URL path and component.
4.Link – Used to navigate between pages without refreshing the browser.

🔹 Advantages of React Router

1.Faster navigation
2.No page reload
3.Better user experience
4.Organized project structure
5.Easy scalability

🧩 Project Description:

This experiment is an extension of Experiment 2. A new webpage was added to the existing React application. Navigation between pages is implemented using React Router.

The project includes:

1.A Home page
2.A Projects page (newly added)
3.A Contact page
4.A Navbar for navigation
5.A Footer for consistent layout

All pages maintain consistent UI design and structure.

📁 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   └── CardComponent.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx

⚙️ Tools & Technologies Used:

1.React (Vite)
2.React Router DOM
3.avaScript (ES6)
4.VS Code

📚 Learning Outcomes:

1.After completing this experiment, we learned:
2.How routing works in React applications.
3.Difference between traditional routing and SPA routing.
4.How to implement multiple pages without reloading.
5.How to structure a scalable React project.
6.How to use Routes, Route, BrowserRouter, and Link.
7.How to extend an existing project with additional functionality.

✅ Result

A functional multi-page React application was successfully developed using React Router with smooth navigation and consistent UI design.