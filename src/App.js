import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";

function App() {
  const [island, setIsland] = useState({
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });

  const [islandsNow, setIslandsNow] = useState(islands);
  const incVisitors = (name) => {
    let theNewIslands = islandsNow;
    let position = theNewIslands.findIndex((island) => island.name === name);
    //alert(theNewIslands[position].visitors);
    theNewIslands[position].visitors++;
    setIslandsNow([...theNewIslands]);
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList islandsNow={islandsNow} setIsland={setIsland} />
        <IslandForm island={island} incVisitors={incVisitors} />
      </div>
    </div>
  );
}

export default App;
