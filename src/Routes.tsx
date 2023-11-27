import { createBrowserRouter } from "react-router-dom";
import Book from "./pages/Book";
import BookDetail from "./pages/BookDetail";
import Dictionary from "./pages/Dictionary";
import Landing from "./pages/Landing";
import RootLayout from "./pages/RootLayout";

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
      { path: "book/:id", element: <BookDetail /> },
    ],
  },
]);
