import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/Signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
