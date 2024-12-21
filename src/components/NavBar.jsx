import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const NavBar = ({ setEntries }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    image: "",
    content: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    setSelectedDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newEntry.date ||
      !newEntry.title ||
      !newEntry.image ||
      !newEntry.content
    )
      return;

    const newEntries = [
      { id: uuidv4(), ...newEntry },
      ...(JSON.parse(localStorage.getItem("entries")) || []),
    ];

    setEntries(newEntries);
    localStorage.setItem("entries", JSON.stringify(newEntries));

    setNewEntry({ date: "", title: "", image: "", content: "" });
    setFormSubmitted(true);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add entry
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setFormSubmitted(false)}
            >
              ✕
            </button>
          </form>
          {!formSubmitted && (
            <>
              <h3 className="font-bold text-lg">Welcome back</h3>
              <p className="py-4">Please select a date to add a diary entry</p>
              <form onSubmit={handleSubmit} className="mb-4">
                <input
                  type="date"
                  name="date"
                  value={newEntry.date}
                  onChange={handleDateChange}
                  max={new Date().toISOString().split("T")[0]}
                  className="input input-bordered w-full max-w-xs"
                />
                {selectedDate && (
                  <>
                    <input
                      type="text"
                      name="title"
                      value={newEntry.title}
                      onChange={handleChange}
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <input
                      type="url"
                      id="image"
                      name="image"
                      value={newEntry.image}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <textarea
                      id="content"
                      name="content"
                      value={newEntry.content}
                      onChange={handleChange}
                      rows="4"
                      cols="50"
                      placeholder="Type your message here..."
                      className="input input-bordered w-full max-w-xs"
                    ></textarea>
                    <button type="submit" className="btn">
                      Add
                    </button>
                  </>
                )}
              </form>
            </>
          )}
          {formSubmitted && (
            <h3 className="font-bold text-lg">
              Your diary entry has been added successfully!
            </h3>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default NavBar;
