import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

import PrivateRoute from "./PrivateRoute";

import AddVisa from "../pages/AddVisa/AddVisa";

import AllVisas from "../pages/Home/AllVisas";
import MyAddedVisa from "../pages/MyAddedVisa/MyAddedVisa";
import VisaDetails from "../pages/Home/VisaDetails";
import VisaUpdate from "../pages/MyAddedVisa/VisaUpdate";
import Apply from "../pages/Apply/Apply";
import MyVisaApplication from "../pages/MyVisaApplication/MyVisaApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "visas",
        element: <AllVisas></AllVisas>,
      },
      {
        path: "visas/:id",
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "AddVisa",
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },

      {
        path: "myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisa></MyAddedVisa>
          </PrivateRoute>
        ),
      },

      {
        path: "updateVisa/:id",
        element: (
          <PrivateRoute>
            <VisaUpdate></VisaUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "apply/:visa_id",
        element: (
          <PrivateRoute>
            <Apply></Apply>
          </PrivateRoute>
        ),
      },
      {
        path: "myVisaApplications",
        element: (
          <PrivateRoute>
            <MyVisaApplication></MyVisaApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
