//Dependencies
import { Link } from "react-router-dom";

//Components
import CartForm from "./CartForm";

//Context
import { useDataContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotal, getTotalItems } = useDataContext();

  return (
    <div className="row gap-6">
      <div className="mb-12">
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

      <div className="row">
        <CartForm />
      </div>
    </div>
  );
};

export default Cart;
