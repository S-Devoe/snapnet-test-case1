import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
interface PropsType {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
}
const Card = (props: PropsType) => {
  const navigate = useNavigate();

  return (
    <div className="card-style" onClick={() => navigate(`/event/${props.id}`)}>
      <h2>
        Title: <span> {props.title} </span>
      </h2>
      <h3 className="organizer">
        Organizer: <span> {props.organizer}</span>{" "}
      </h3>
      <h3 className="category">
        Category: <span> {props.category} </span>{" "}
      </h3>

      <p className="description">
        Description: <span> {props.description} </span>{" "}
      </p>

      <div className="location-date ">
        <div className="location">
          <span>
            <HiLocationMarker />
          </span>
          <h4> {props.location}</h4>
        </div>
        <div className="date-and-time">
          <span>Date: {props.date} </span>
          <span>Time: {props.time} </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
