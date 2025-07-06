import { useState } from "react";

function ListGroup() {
  let dogs = ["Amy", "Abbie", "Chloe", "Mia"];
  const [selectedIndex, selectedStateIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {dogs.length === 0 && <p>No dogs found!</p>}
        {dogs.map((dog, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={dog}
            onClick={() => {
              selectedStateIndex(index);
            }}
          >
            {dog}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
