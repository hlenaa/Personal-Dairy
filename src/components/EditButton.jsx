import { useState } from "react";

const EditButton = ({ entry, handleUpdateEntries }) => {
  const [formData, setFormData] = useState({
    date: entry.date,
    title: entry.title,
    image: entry.image,
    content: entry.content,
  });

  const updateEntry = (id, updatedEntry) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    const index = entries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      entries[index] = {
        ...entries[index], // Preserve the original entry, including id
        ...updatedEntry, // Merge updated fields
      };
    }
    localStorage.setItem("entries", JSON.stringify(entries));
    if (handleUpdateEntries) {
      console.log("handleUpdateEntries");
      handleUpdateEntries(entries);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry(entry.id, formData);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Welcome back</h3>
          <p className="py-4">Please select a date to add a diary entry</p>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com"
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="4"
              cols="50"
              placeholder="Type your message here..."
              className="input input-bordered w-full max-w-xs"
            ></textarea>
            <button type="submit" onClick={updateEntry} className="btn">
              Update
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Your diary entry has been updated successfully!
          </h3>
        </div>
      </dialog>
    </div>
  );
};

export default EditButton;
