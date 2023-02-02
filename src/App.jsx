import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div class="container mx-auto px-4 py-4">
      <NavBar />
      <ItemListContainer greeting="Welcome to MyReactEcommerce 🚀" />
    </div>
  );
};

export default App;
