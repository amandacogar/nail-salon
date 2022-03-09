import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./sections/navigation.js";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
