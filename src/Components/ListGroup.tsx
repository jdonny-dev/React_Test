function ListGroup() {
  let dogs = ["Amy", "Abbie", "Chloe", "Mia"];
  dogs = [];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {dogs.length === 0 && <p>No dogs found!</p>}
        {dogs.map((dog) => (
          <li key={dog}>{dog}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
