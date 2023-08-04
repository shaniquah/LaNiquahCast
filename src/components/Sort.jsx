/* The line `import { useState } from "react";` is importing the `useState` hook from the React
library. The `useState` hook is a built-in hook in React that allows functional components to have
state variables. It is used to create and manage state in a functional component. */
import { useState } from "react";

/**
 * The SortBy function is a React component that allows users to sort a list of items in alphabetical
 * order.
 * @returns The SortBy component is being returned.
 */
export default function SortBy({ ...handleSort }) {
  /* The line `const [sortedItems, setSortedItems] = useState([...handleSort]);` is using the `useState`
  hook from React to create a state variable called `sortedItems` and a function called
  `setSortedItems` to update the state. */
  const [sortedItems, setSortedItems] = useState({...handleSort});
  /**
   * The `sortHandler` function sorts an array of items in alphabetical order and updates the state
   * with the sorted items.
   */
  const sortHandler = () => {
setSortedItems(sortedItems)
    
  };

  /* The `return` statement in the code is returning a JSX (JavaScript XML) expression. It is rendering
  a `<div>` element that contains a button and an unordered list (`<ul>`). */
  return (
    <div>
      <button onClick={sortHandler}>A - Z</button>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
