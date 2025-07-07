import { useState } from "react";
interface Props {
  dogs: string[];
  heading: string;
}
function ListGroup({dogs, heading}: Props) {
  const [selectedIndex, selectedStateIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
