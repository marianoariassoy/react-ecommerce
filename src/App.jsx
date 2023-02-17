import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Welcome from "./components/home/Welcome";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <div className="container mx-auto h-full p-12">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/list" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
