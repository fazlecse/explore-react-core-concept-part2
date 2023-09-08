import { useState } from "react";

export default function Team() {
  const [teamCount, setTeamCount] = useState(11);

  const handleAdd = () => {
    const newTeamCount = teamCount + 1;
    setTeamCount(newTeamCount);
  };
  const handleReduce = () => {
    setTeamCount(teamCount - 1);
  };

  const teamStyle = {
    border: "2px solid purple",
    margin: "10px 0",
    padding: "5px",
  };
  return (
    <div style={teamStyle}>
      <h3>Player : {teamCount}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
