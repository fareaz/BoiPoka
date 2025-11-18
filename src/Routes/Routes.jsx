import React from "react";
import { createBrowserRouter } from "react-router"; // ⬅️ এখানেই প্রথম ফিক্স

import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Listed from "../Pages/Listed/Listed";
import BookDetails from "../Pages/BookDetails/BookDetails";
import WishList from "../Pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "/listed",
        loader: () => fetch("booksData.json").then((res) => res.json()),
        Component: Listed,
      },
      {
        path: "/wishList",
        loader: () => fetch("booksData.json").then((res) => res.json()),
        Component: WishList,
      },
    ],
    
  },
  {
        path: "/bookDetails/:bookId",
        loader: () => fetch("booksData.json").then((res) => res.json()),
        Component: BookDetails,
      }
]);
