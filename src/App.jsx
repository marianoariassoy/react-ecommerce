//Dependencies
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Welcome from "./components/home/Welcome";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import CartContainer from "./components/cart/CartContainer";
import PageNotFound from "./components/common/PageNotFound";

//Context
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <main>
          <div className="container mx-auto h-full p-12">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/list" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
