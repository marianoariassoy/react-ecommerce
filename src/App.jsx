import React from "react";
import NavBar from "./components/common/NavBar";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import Footer from "./components/common/Footer";
import Welcome from "./components/home/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-4">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
