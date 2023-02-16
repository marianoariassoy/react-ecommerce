import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = (op) => {
    switch (op) {
      case 0:
        if (count > 1) setCount(count - 1);
        break;
      case 1:
        if (count < stock) setCount(count + 1);
        break;
    }
  };
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mb-2">{description}</p>
        <h2 className="card-title mb-2 text-primary">${price}</h2>
        <div className="card-actions justify-between">
          <div className="btn-group">
            <button className="btn" onClick={() => onAdd(0)}>
              «
            </button>
            <button className="btn">{count}</button>
            <button className="btn" onClick={() => onAdd(1)}>
              »
            </button>
          </div>
          <Link to={`/item/${id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
