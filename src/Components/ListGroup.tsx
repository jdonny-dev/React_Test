function ListGroup() {
  const dogs = ["Amy", "Abbie", "Chloe", "Mia"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {dogs.map((dog) => (
          <li key={dog}>{dog}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
