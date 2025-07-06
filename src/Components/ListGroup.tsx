import type { MouseEvent } from "react";

function ListGroup() {
  let dogs = ["Amy", "Abbie", "Chloe", "Mia"];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {dogs.length === 0 && <p>No dogs found!</p>}
        {dogs.map((dog) => (
          <li key={dog} onClick={handleClick}>
            {dog}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
