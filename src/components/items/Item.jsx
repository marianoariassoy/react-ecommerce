import { Link } from "react-router-dom";
let category = null;

const Item = ({ data }) => {
  switch (data.category) {
    case 1:
      category = "Programación Y Desarrollo";
      break;
    case 2:
      category = "Diseño UX/UI";
      break;
    case 3:
      category = "Inversiones Y Finanzas";
      break;
  }
  return (
    <div className="card bg-base-100 ">
      <div className="card-body text-gray-400">
        <div className="badge badge-outline mb-2 text-gray-500">{category}</div>
        <h2 className="card-title text-white text-2xl">{data.name}</h2>
        <div>{data.start}</div>
        <div className="mb-4 flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {data.hour}
        </div>
        <h2 className="card-title mb-2 text-primary">${data.price} ARS</h2>
        <div className="card-actions">
          <Link to={`/item/${data.id}`} className="btn text-primary normal-case">
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
