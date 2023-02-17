import ItemCount from "./ItemCount";
import categories from "../../utils/categories";

const ItemDetail = ({ data }) => {
  let category = categories[data.category];
  return (
    <div className="hero mx-auto bg-base-200 mt-6 max-w-4xl">
      <div className="hero-content flex-col lg:flex-row p-12 ">
        <div>
          <div className="badge badge-outline text-gray-500 mb-4">{category}</div>
          <h1 className="text-5xl font-bold text-primary">{data.name} </h1>
          <p className="py-6 text-2xl">{data.description}</p>
          <div className="text-gray-500 mb-4">{data.start}</div>

          <h2 className="text-primary text-4xl font-bold mb-6 ">${data.price} ARS</h2>

          <div className="card-actions  items-center">
            <ItemCount stock={data.stock} />
            <button className="btn text-primary btn-lg mr-6 btn-outline">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
