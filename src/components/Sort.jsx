import { useState } from "react";

export default function SortBy({ props }) {
  const [sortedItems, setSortedItems] = useState([...props]);

  const sortHandler = () => {
    const sortedAZ = [...sortedItems].sort((a, b) => a.localeCompare(b));
    const sortedZA = [...sortedItems].sort((a, b) => b - a);
    setSortedItems(sortedAZ);
    if (sortedAZ === true && event === true) {
      setSortedItems(sortedZA);
    }
  };

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
