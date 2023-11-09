import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './root/signin';
import ErrorPage from './ErrorPage';
import SignUp from './routes/SignUp';
import TodoPage from './routes/TodoPage';
import Settings from './routes/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Settings/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <App/>
  },
  {
    path: "/todo/:id",
    element: <TodoPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

