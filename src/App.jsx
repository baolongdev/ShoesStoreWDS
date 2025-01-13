import React, { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import ContactPage from './components/contact';
import LoginPage from './pages/login';


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <ContactPage />,
      },

    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
]);


export default function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}