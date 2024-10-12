import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn/signIn";
import { StrictMode } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import AddItem from "./components/AddItem/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn showImageInput={false} showImageInput2={true} />,
  },
  { path: "/signup", 
    element: <SignIn showImageInput={true} showImageInput2={false} /> },

  { path: "/dashboard",
     element: <Dashboard /> },

  { path: "/Add",
      element: <AddItem /> },

  { path: "/Delete",
        element: <AddItem /> },    
  
  { path: "/Edit",
          element: <AddItem /> },          
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
