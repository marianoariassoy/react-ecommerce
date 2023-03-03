//Dependencies
import { useState, useContext } from "react";

//Context
import { CartContext } from "../../context/cartContext";

const ItemCount = ({ stock, id, name, price, category }) => {
  const { addToCart, isInCart, getStockInCart, cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const stockInCart = getStockInCart(id);
  stock = stock - stockInCart;

  const onAdd = () => {
    setCount(1);
    if (!isInCart(id)) {
      addToCart({ id: id, name: name, price: price, category: category, quantity: count });
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + count };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const Increment = (e) => {
    const op = e.target.dataset.type === "increment" ? 1 : 0;

    switch (op) {
      case 0:
        if (count > 1) setCount(count - 1);
        break;
      case 1:
        if (count < stock) setCount(count + 1);
    }
  };
  return (
    <>
      {stock ? (
        <>
          <span className="btn btn-lg ">Vacantes: {stock}</span>

          <div className="btn-group">
            <button className="btn btn-lg" data-type="decrement" onClick={(e) => Increment(e)}>
              «
            </button>
            <button className="btn btn-lg">{count}</button>
            <button className="btn btn-lg" data-type="increment" onClick={(e) => Increment(e)}>
              »
            </button>
          </div>

          <button className="btn bg-primary btn-lg text-black" onClick={onAdd}>
            Comprar
          </button>
        </>
      ) : (
        <span className="btn text-primary btn-lg btn-outline">Sin Vacantes</span>
      )}
    </>
  );
};

export default ItemCount;
