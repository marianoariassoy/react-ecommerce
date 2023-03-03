//Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../context/cartContext";

//Utils
import categories from "../../utils/categories";

const Cart = () => {
  const { cart, removeFromCart, getTotal, getTotalItems } = useContext(CartContext);

  return (
    <div>
      <div className="overflow-x-auto w-full mb-12">
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
                      <div className="text-sm opacity-50">{categories[item.category]}</div>
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

        <div className="stats bg-secondary text-black  mr-6">
          <div className="stat text-right">
            <div className="stat-title">Cantidad de cursos</div>
            <div className="stat-value">{cart.length}</div>
          </div>
        </div>
        <div className="stats bg-secondary  text-black mr-6">
          <div className="stat text-right">
            <div className="stat-title">Vacantes</div>
            <div className="stat-value">{getTotalItems()}</div>
          </div>
        </div>
        <div className="stats bg-primary justify-end text-black">
          <div className="stat text-right">
            <div className="stat-title">Precio total</div>
            <div className="stat-value">${getTotal()} ARS</div>
          </div>
        </div>
      </div>

      <div className="row card w-full bg-base-100 mb-6">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
        </div>
      </div>

      <button className="btn btn-primary btn-wide mt-6">Finalizar la compra</button>
    </div>
  );
};

export default Cart;
