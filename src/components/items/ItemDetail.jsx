import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="card bg-base-200 p-12">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">{data.name} </h1>
          <p className="py-6 text-2xl">{data.description}</p>
          <h2 className="text-primary text-3xl font-bold mb-6 ">${data.price} ARS</h2>
          <button className="btn btn-primary normal-case text-xl">Comprar</button>
          <ItemCount stock={data.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
