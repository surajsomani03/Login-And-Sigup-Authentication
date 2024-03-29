import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../src/pages/SignUp";
import Login from "../src/pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/home",
    element: <Home/>
  }
  ]);
function App() {
  return (
    <div style={{ padding: "0", margin: "0" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
