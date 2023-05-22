import { useQuery } from "@tanstack/react-query";
import { getSingleEvent } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { EventType } from "../types/types";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

const SingleEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useQuery<EventType, Error>(["event"], () =>
    getSingleEvent(Number(id))
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <section className="event-section">
      <div className="back-icon" onClick={() => navigate(-1)}>
        <span>
          <IoIosArrowBack />
        </span>{" "}
        back
      </div>
      <h1>Event Detail</h1>
      <div className="event-content">
        <h2>
          Title: <span>{data.title}</span>{" "}
        </h2>

        <h3>
          Organizer: <span> {data.organizer} </span>
        </h3>

        <h3>
          Category: <span>{data.category}</span>
        </h3>

        <h3>
          Description:
          <span>{data.description}</span>
        </h3>

        <h4>
          <span>
            <HiLocationMarker />
          </span>
          <span> {data.location} </span>
        </h4>

        <h3 className="event-date ">
          <span>Date: {data.date} </span>
          <span>Time: {data.time} </span>
        </h3>
      </div>
    </section>
  );
};
export default SingleEvent;
