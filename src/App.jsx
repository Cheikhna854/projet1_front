import React from "react";
import Acceuil from "./pages/Acceuil";
import Produits from "./pages/Produits";
import Contact from "./pages/contact";
import Layout from "./pages/Layout";

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const App = () => {
  const [ouvert, setOuvert] = React.useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
      <Layout ouvert={ouvert} setOuvert={setOuvert} />
      }>
        <Route index element={<Acceuil ouvert={ouvert} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="produits" element={<Produits />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;