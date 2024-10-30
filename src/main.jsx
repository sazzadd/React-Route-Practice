import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact"; // Make sure this is correct
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,  
      },
      {
        path: '/user',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),


      },
      {
        path: '/user/:userId',
        // loader:({params}) => console.log(params) ,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,  // Replace 
      },

      {
        path: '/post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);
