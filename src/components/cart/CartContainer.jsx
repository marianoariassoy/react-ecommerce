//Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../context/cartContext";

//Components
import Cart from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  if (cart.length) return <Cart />;
  else
    return (
      <div className="row text-center ">
        <h1 className="text-3xl font-bold mb-12">No hay cursos en el carrito 🥲</h1>
        <Link to="/list" className="btn btn-primary btn-lg">
          VER CURSOS
        </Link>
      </div>
    );
};

export default CartContainer;
