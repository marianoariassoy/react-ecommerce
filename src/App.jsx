import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Welcome from "./components/home/Welcome";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import PageNotFound from "./components/common/PageNotFound";

import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <div className="container mx-auto h-full p-12">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/list" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
