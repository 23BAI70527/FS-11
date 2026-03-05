Experiment 5 – Advanced React State Management

 📌 Title
Enhancing a Multi-Page React Application Using Redux Toolkit, Context API, and useMemo

🎯 Aim

To extend the existing React multi-page application by implementing structured state management using Redux Toolkit, global state handling with Context API, and performance optimization using useMemo, while maintaining a consistent user interface and navigation using React Router.

🎯 Objectives

1.📦 To understand and implement **Redux Toolkit** for centralized and scalable state management.
2.🌐 To use **Context API** for managing global application settings such as theme.
3.⚡ To optimize derived computations using **useMemo** for better performance.
4.📄 To extend the existing multi-page React application by adding a new functional page.
5.🎨 To maintain consistent **UI/UX design** across all pages.

🛠 Tools and Technologies Used

⚛ React.js
🧠Redux Toolkit
🔗 React Router DOM
💻 JavaScript (ES6+)
🌐 HTML5
🎨 CSS3
🟢 Node.js
⚡ Vite
🧑‍💻 Visual Studio Code

📖 Description
This experiment focuses on enhancing the previously developed React multi-page application by integrating modern state management techniques. The project introduces **Redux Toolkit** for efficient and scalable state management and **Context API** for handling global states such as theme switching (Light/Dark mode).

The application includes multiple pages connected through **React Router**, enabling smooth navigation between sections such as **Home, Projects, Analytics, Contact**, and a newly added **Reports page**.

The Reports page demonstrates practical usage of Redux Toolkit by implementing a Task Manager system where users can:

➕ Add new tasks
✅ Mark tasks as completed
🔄 Undo completed tasks
🗑 Delete tasks

Additionally, useMemo is implemented to calculate derived values such as the number of total tasks, completed tasks, and pending tasks efficiently without unnecessary re-rendering.
The user interface is designed with modern CSS styling, providing a clean, responsive, and visually appealing layout suitable for both desktop and mobile screens.

🔧 What We Implemented in This Experiment

📄 Extended the previous React Router project by adding a new page (Reports).
🧠 Implemented Redux Toolkit including:

* `configureStore`
* `createSlice`
* Actions such as addTask, toggleTask, deleteTask.
* 📤 Used useDispatch to trigger Redux actions.
* 📥 Used useSelector to access Redux state inside components.
* 🌐 Implemented Context API for global theme management (Light/Dark Mode).
* ⚡ Applied useMemo for optimized calculations:
* Total tasks
* Completed tasks
* Pending tasks
* 📊 Built a Task Manager dashboard in the Reports page.
* 🎨 Improved the UI with modern and responsive CSS styling.

✅ Result

The React application was successfully enhanced with advanced state management techniques. The project now supports global theme switching, Redux-based task management, optimized computations using useMemo, and an additional Reports page, while maintaining smooth navigation between all pages.

The final application demonstrates practical integration of Redux Toolkit, Context API, and React performance optimization techniques within a structured multi-page React project.

📚 Learning Outcomes

1.Developed practical understanding of Redux Toolkit for centralized state management.
2.Learned how to use Context API for global application state.
3.Understood how useMemo optimizes performance by preventing unnecessary recalculations.
4.Improved skills in building scalable multi-page React applications.
5.Learned to combine multiple React concepts while maintaining a clean, responsive, and user-friendly interface.

