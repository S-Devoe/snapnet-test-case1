import { useQuery } from "@tanstack/react-query";
import { EventType } from "../types/types";
import { getAllEvent } from "../services/api";
import { useState } from "react";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [petsAllowed, setPetsAllowed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  console.log(petsAllowed);

  const { data, isLoading, error, refetch } = useQuery<EventType[], Error>(
    ["events"],
    () => getAllEvent(searchQuery, petsAllowed)
  );

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
    refetch();
  };

  const handleFilter = () => {
    setPetsAllowed((prev) => !prev);
    refetch();
  };

  console.log("isLoading:", isLoading);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <section className="container">
      <Navbar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

      <div className="pets-allowed">
        Filter by:{" "}
        <button
          className={`${petsAllowed && "activeButton"}`}
          onClick={handleFilter}
        >
          Pets Allowed
        </button>
      </div>
      {/* content */}
      <div className="main-content">
        {data?.map((value) => (
          <Card {...value} key={value.id} />
        ))}
      </div>
    </section>
  );
};
export default HomePage;
