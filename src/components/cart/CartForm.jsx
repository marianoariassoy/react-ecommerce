//Dependencies
import { useState, useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../context/cartContext";

const CartForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, { name, email, cart }).then(({ id }) => setOrderId(id));
    // clearCart();
  };

  const orderCollection = collection(db, "orders");

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row card bg-base-100 mb-6">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre y Apellido</span>
              </label>
              <input type="text" placeholder="nombre" className="input input-bordered" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
        </div>

        {!orderId.length ? (
          <div>
            <Link to="/list" className="btn btn-outline btn-wide btn-lg normal-case mr-3 mb-3">
              Continuar comprando
            </Link>
            <button className="btn btn-primary btn-wide btn-lg  normal-case">Finalizar la compra</button>
          </div>
        ) : (
          <p>Número de orden: {orderId}</p>
        )}
      </form>
    </>
  );
};

export default CartForm;
