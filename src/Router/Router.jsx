import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddTask from "../components/AddTask";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        }
        ,
        {
          path: "addTask",
          element: <AddTask></AddTask>,
        },
      ],
    },
  ]);
