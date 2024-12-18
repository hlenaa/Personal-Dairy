import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Home = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  return (
    <div>
      <NavBar setEntries={setEntries} />
      <ul>
        {entries.map((entry) => (
          <Card key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
