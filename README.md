# Project Name: Dev Stack

DevStack is a React-based web application that displays 12 technology cards fetched from a JSON file. Users can explore available technologies, add their preferred technologies to their stack, and remove individual technologies or clear the entire stack. The sidebar dynamically displays all selected technologies, providing a simple and interactive way to build a personalized tech stack.

# Technology Used:

1. React 
2. Tailwind CSS
3. React Hot Toast
4. Vite
5. JSON

# Features:

1. Technology Cards: Displays 12 technologies fetched from a JSON file.
2. Add & Remove Technologies: Allows users to add or remove technologies from their stack.
3. Dynamic Stack Sidebar: Shows selected technologies and supports clearing the entire stack at once.

## React Questions & Answers

**1. What is JSX, and why is it used in React?**

JSX lets us write HTML-like code inside JavaScript. I used it to create the UI of my DevStack project easily.

**2. What is the difference between props and state?**

Props are used to pass data from a parent component to a child component. State stores data that can change when users interact with the application.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` is used to store and update data in a component. I used it to manage the technology list and the selected technologies in my stack.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs code when a component mounts or when its dependencies change. I used it to fetch technology data from the JSON file when the component loaded.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

A unique key helps React identify each item in a list. It helps React update the correct items when the list changes.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different content based on a condition. In my project, I showed an empty stack message when no technology was selected.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

I passed data and functions through props. For example, I passed the technology data and state update function to the child component. The child called the function to add or remove technologies, and the parent updated the stack.

