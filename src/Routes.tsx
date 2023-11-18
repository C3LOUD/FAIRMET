import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Landing from "./pages/Landing";
import Dictionary from "./pages/Dictionary";
import Book from "./pages/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "dictionary",
        element: <Dictionary />,
      },
      { path: "book", element: <Book /> },
    ],
  },
]);
