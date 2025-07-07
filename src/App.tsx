import ListGroup from "./Components/ListGroup";

let dogs = ["Amy", "Abbie", "Chloe", "Mia"];
function App() {
  return (
    <div>
      <ListGroup dogs={dogs} heading="List" />
    </div>
  );
}
export default App;
