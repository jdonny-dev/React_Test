import { Alert } from "./Components/Alert";
import ListGroup from "./Components/ListGroup";

let dogs = ["Amy", "Abbie", "Chloe", "Mia"];
const handleSelectDog = (dog: string) => {
  console.log(dog);
};
function App() {
  return (
    <div>
      <ListGroup dogs={dogs} heading="List" onSelectDog={handleSelectDog} />
      <Alert>Hello World</Alert>
    </div>
  );
}
export default App;
