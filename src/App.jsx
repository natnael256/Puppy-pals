import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { puppyList } from "/data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return <p Key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
