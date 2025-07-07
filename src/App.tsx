import { useState } from "react";
import { Alert } from "./Components/Alert";
import { Button } from "./Components/Button";
import ListGroup from "./Components/ListGroup";

let dogs = ["Amy", "Abbie", "Chloe", "Mia"];
const handleSelectDog = (dog: string) => {
  console.log(dog);
};
function App() {
  const [alertVisable, setAlertVisability] = useState(false);
  return (
    <div>
      <ListGroup dogs={dogs} heading="List" onSelectDog={handleSelectDog} />
      {alertVisable && (
        <Alert onClose={() => setAlertVisability(false)}>Warning</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisability(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
