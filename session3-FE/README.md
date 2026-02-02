# Session 3 Frontend - React useState Lab: Counter with Theme Toggle

## Created by: Sandeep1234844

This project implements the React Activity 1 from Session 3, demonstrating the `useState` hook by building a Counter component with theme toggle functionality.

### Learning Objectives Achieved:

✅ Understand how events work in vanilla JavaScript vs React  
✅ Attach event handlers using `onClick`  
✅ Explain why normal variables do not update the UI in React  
✅ Use the `useState` hook to manage component state  
✅ Update state safely using callback functions (functional updates)  
✅ Understand the difference between **imperative** and **declarative** programming  

### Features Implemented:

1. **Theme Toggle**
   - Switch between light and dark themes
   - Three buttons: Dark, Light, and Toggle Theme
   - Uses `useState` for theme management

2. **Counter Functionality**
   - Increment and decrement counter value
   - Uses `useState` for counter state
   - Uses functional updates (callback form) for safe state updates

### Key Concepts Demonstrated:

- **useState Hook**: Managing component state
  ```jsx
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  ```

- **onClick Event Handlers**: React event handling
  ```jsx
  <button onClick={incrementHandler}>Increment</button>
  ```

- **Functional Updates**: Safe state updates using callbacks
  ```jsx
  setCount(prevCount => prevCount + 1);
  ```

- **Conditional Styling**: Dynamic className based on state
  ```jsx
  <div className={`content ${theme}`}>
  ```

### Installation:

```bash
npm install
```

### Run Development Server:

```bash
npm run dev
```

The app will run on `http://localhost:5173` (default Vite port).

### Project Structure:

```
session3-FE/
├── src/
│   ├── Counter.jsx      # Main Counter component
│   ├── Counter.css      # Component styles
│   ├── App.jsx          # App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Activity Reference:

Based on: [React useState Lab: Building a Counter with Theme Toggle](https://github.com/FullStack-DP/session3-FE/blob/main/material/fe-react-activity1.md)

