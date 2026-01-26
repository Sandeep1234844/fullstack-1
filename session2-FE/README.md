# Session 2 Frontend - React useState & Events

## Created by: Sandeep1234844

This project demonstrates React concepts learned in Session 2 homework:

### Concepts Demonstrated:

1. **useState Hook** - Managing component state
2. **onClick Events** - Handling button clicks and user interactions
3. **onChange Events** - Handling input changes in forms
4. **Updater Functions** - Using functional updates with useState
5. **Spread Operator** - JavaScript spread operator with arrays and objects
6. **Destructuring** - Array and object destructuring in JavaScript
7. **Color Picker App** - Main project requirement

### Components Created:

- **ColorPicker.jsx** - Main Color Picker app (useState, onClick, onChange, updater functions)
- **Counter.jsx** - Counter with useState and updater functions
- **FormInput.jsx** - Form with onChange handlers and useState
- **SpreadOperatorDemo.jsx** - Demonstrates spread operator usage
- **DestructuringDemo.jsx** - Demonstrates array and object destructuring
- **App.jsx** - Main component using all components

### Installation:

```bash
npm install
```

### Run Development Server:

```bash
npm run dev
```

### Build for Production:

```bash
npm run build
```

### Key Learning Points:

- **useState Hook**: `const [state, setState] = useState(initialValue)`
- **onClick Handler**: `<button onClick={handleClick}>Click me</button>`
- **onChange Handler**: `<input onChange={(e) => handleChange(e.target.value)} />`
- **Updater Functions**: `setState(prev => prev + 1)` ensures latest state
- **Spread Operator**: `[...array]` and `{...object}` for copying/merging
- **Destructuring**: `const {name, age} = object` and `const [first, second] = array`

