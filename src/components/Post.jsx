import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Post = ({ entry, handleUpdateEntries }) => {
  return (
    <div>
      <p>{entry.date}</p>
      <h2>{entry.title}</h2>
      <figure>
        <img src={entry.image} alt={entry.title} />
      </figure>
      <div>
        <p>{entry.content}</p>
      </div>
      <EditButton entry={entry} handleUpdateEntries={handleUpdateEntries} />
      <DeleteButton entry={entry} />
    </div>
  );
};

export default Post;
