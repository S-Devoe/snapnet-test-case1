import axios from "axios";
import { EventType } from "../types/types";

const API_URL =
  "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events/";

export const getAllEvent = async (
  searchQuery: string,
  filterQuery?: boolean
) => {
  const response = await axios.get<EventType[]>(
    `${API_URL}?${searchQuery.length > 0 && `q=${searchQuery}`}&${
      filterQuery && `petsAllowed=${filterQuery}`
    }`
  );

  return response.data;
};

export const getSingleEvent = async (id: number) => {
  const response = await axios.get<EventType>(`${API_URL}/${id}`);

  return response.data;
};
