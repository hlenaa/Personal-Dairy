import { useNavigate } from "react-router-dom";

const DeleteButton = ({ entry }) => {
  const navigate = useNavigate();

  const deleteEntry = (id) => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEntry(entry.id);
    navigate("/");
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Delete
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">Please confirm you want to delete this entry</p>
          <form onSubmit={handleSubmit} className="mb-4">
            <button type="submit" className="btn">
              Delete
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteButton;
