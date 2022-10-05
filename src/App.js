import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Exit from "./components/Exit";
import Ffetch from "./components/Ffetch";
import Main from "./layout/Main";
import FriednDetails from "./components/FriednDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/exit",
          element: <Exit></Exit>,
        },
        {
          path: "/fetch",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Ffetch></Ffetch>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="text-6xl text-center bg-slate-600 p-10">
          Snap...!! <p>Page not found...</p>
        </div>
      ),
    },
    {
      path: "/friend/:id",
      loader: async ({ params }) => {
        //console.log(params.id);
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      },
      element: <FriednDetails></FriednDetails>,
    },
  ]);
  return (
    <>
      <div className="App"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
