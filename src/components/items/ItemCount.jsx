import { useState } from "react";

const ItemCount = ({ stock }) => {
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
    <div className="btn-group">
      <button className="btn btn-lg" onClick={() => onAdd(0)}>
        «
      </button>
      <button className="btn btn-lg">{count}</button>
      <button className="btn btn-lg" onClick={() => onAdd(1)}>
        »
      </button>
    </div>
  );
};

export default ItemCount;
