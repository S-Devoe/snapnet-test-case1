import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleEvent from "../pages/SingleEvent";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route path="/" element={<HomePage />} />
      <Route path="event/:id" element={<SingleEvent />} />
    </Route>
  )
);
