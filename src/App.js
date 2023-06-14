import React from "react"
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Add from "./pages/Add/Add";
import Checkout from "./pages/Checkout/Checkout";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
