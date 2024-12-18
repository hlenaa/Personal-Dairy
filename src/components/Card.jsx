import { Link } from "react-router-dom";

const Card = ({ entry }) => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img src={entry.image} alt={entry.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{entry.title}</h2>
        <p>{entry.date}</p>
        <div className="card-actions justify-end">
          <Link to={`/entry/${entry.id}`} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
