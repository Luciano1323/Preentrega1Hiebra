import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/cafes"
          element={
            <ItemListContainer greeting="Bienvenido a nuestra tienda de café" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
