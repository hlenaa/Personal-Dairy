import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

const Home = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
