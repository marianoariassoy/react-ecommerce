//Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotal, getTotalItems } = useContext(CartContext);

  return (
    <div className="row flex gap-6">
      <div>
        <table className="table w-full mb-6">
          <thead>
            <tr>
              <th>#</th>
              <th>Curso</th>
              <th>Precio</th>
              <th>Vacantes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">
                        <Link to={`/item/${item.id}`} className="text-primary">
                          {item.name}
                        </Link>
                      </div>
                      <div className="text-sm opacity-50">{item.category}</div>
                    </div>
                  </div>
                </td>
                <td>${item.price} ARS</td>
                <td>{item.quantity}</td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={() => removeFromCart(item.id)}>
                    Quitar
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="stats bg-secondary text-black mr-3 mb-3">
          <div className="stat text-right">
            <div className="stat-title">Cantidad de cursos</div>
            <div className="stat-value">{cart.length}</div>
          </div>
        </div>
        <div className="stats bg-secondary  text-black mr-3 mb-3">
          <div className="stat text-right">
            <div className="stat-title">Vacantes</div>
            <div className="stat-value">{getTotalItems()}</div>
          </div>
        </div>
        <div className="stats bg-primary justify-end text-black mb-3">
          <div className="stat text-right">
            <div className="stat-title">Precio total</div>
            <div className="stat-value">${getTotal()} ARS</div>
          </div>
        </div>
      </div>

      <div className="col w-1/2">
        <div className="row card bg-base-100 mb-6">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre y Apellido</span>
              </label>
              <input type="text" placeholder="nombre" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
          </div>
        </div>

        <Link to="/list" className="btn btn-outline btn-wide btn-lg normal-case mr-3 mb-3">
          Continuar comprando
        </Link>
        <button className="btn btn-primary btn-wide btn-lg  normal-case">Finalizar la compra</button>
      </div>
    </div>
  );
};

export default Cart;
