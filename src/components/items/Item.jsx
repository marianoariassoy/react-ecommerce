//Dependencies
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div className="card bg-base-100 rounded-none">
      <div className="card-body text-gray-400">
        <div className="badge mb-2 p-4 rounded-none bg-base-200 border-none">{data.category}</div>
        <h2 className="card-title text-primary text-3xl mb-3 font-bold">{data.name}</h2>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {data.start}
        </div>
        <div className="mb-3 flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {data.hour}
        </div>
        <div className="text-gray-500 mb-3">Vacantes: {data.stock}</div>
        <h2 className="mb-2 text-white text-3xl">${data.price} ARS</h2>
        <Link to={`/item/${data.id}`} className="btn text-primary rounded-none normal-case">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
