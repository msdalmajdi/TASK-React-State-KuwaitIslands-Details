import React from "react";

export default function Island({ island, setIsland }) {
  const changeForm = () => setIsland({ name: island.name, img: island.img });

  return (
    <div className="Island" onClick={() => changeForm(island.name, island.img)}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
