import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Post from "../components/Post";

const Entry = () => {
  console.log("Entry.jsx");

  const { id } = useParams(); // Extract the entry ID from the URL
  console.log("ID outside useEffect:", id);
  const [entry, setEntry] = useState(null);

  // Function to get the entry by ID from localStorage
  const getPost = (id) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    console.log("Entries in localStorage:", entries);
    return entries.find((entry) => entry.id === id);
  };

  console.log(localStorage.getItem("entries"));

  useEffect(() => {
    console.log("ID from useParams:", id);
    const fetchedEntry = getPost(id);
    console.log("Fetched Entry:", fetchedEntry);
    setEntry(fetchedEntry);
  }, [id]);

  return (
    <div>
      <NavBar />
      {entry ? (
        <Post entry={entry} />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default Entry;
