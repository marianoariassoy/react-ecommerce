import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-4 ">
      <NavBar />
      <ItemListContainer greeting="Our Products" />
      <Footer />
    </div>
  );
};

export default App;
