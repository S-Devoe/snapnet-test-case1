import axios from "axios";
import { EventType } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllEvent = async (
  searchQuery?: string,
  filterQuery?: boolean
) => {
  const response = await axios.get<EventType[]>(
    `${API_URL}?q=${searchQuery}&${filterQuery && `petsAllowed=${filterQuery}`}`
  );

  return response.data;
};

export const getSingleEvent = async (id: number) => {
  const response = await axios.get<EventType>(`${API_URL}/${id}`);

  return response.data;
};
