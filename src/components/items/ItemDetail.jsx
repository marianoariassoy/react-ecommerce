import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import categories from "../../utils/categories";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const category = categories[data[0].category];

  const { addToCart } = useContext(CartContext);
  const onAdd = (quantity) => addToCart(data[0], quantity);

  return (
    <div className="hero mx-auto bg-base-100 mt-6 max-w-4xl">
      <div className="hero-content flex-col lg:flex-row p-12 ">
        <div>
          <div className="badge mb-4 bg-base-200 p-4 rounded-none border-0">{category}</div>
          <h1 className="text-5xl font-bold text-primary">{data[0].name} </h1>
          <p className="py-6 text-2xl">{data[0].description}</p>
          <div className="text-gray-500 mb-6 flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {data[0].start}
          </div>

          <h2 className="text-primary text-4xl font-bold mb-6 ">${data[0].price} ARS</h2>

          <div className="card-actions items-center">
            <ItemCount stock={data[0].stock} />
            <button className="btn text-primary btn-lg mr-6 btn-outline" onClick={onAdd}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
