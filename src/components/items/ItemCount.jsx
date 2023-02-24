import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [isDisabledRest, setIsDisabledRest] = useState(false);
  const [isDisabledAdd, setIsDisabledAdd] = useState(false);

  const onAdd = (op) => {
    switch (op) {
      case 0:
        if (count > 1) setCount(count - 1);
        break;
      case 1:
        if (count < stock) setCount(count + 1);
    }

    if (count === 1) setIsDisabledRest(true);
    else setIsDisabledRest(false);

    if (count === 10) setIsDisabledAdd(true);
    else setIsDisabledAdd(false);

    console.log(count);
  };
  return (
    <div className="btn-group">
      <button className="btn btn-lg" disabled={isDisabledRest} onClick={() => onAdd(0)}>
        «
      </button>
      <button className="btn btn-lg">{count}</button>
      <button className="btn btn-lg" disabled={isDisabledAdd} onClick={() => onAdd(1)}>
        »
      </button>
    </div>
  );
};

export default ItemCount;
