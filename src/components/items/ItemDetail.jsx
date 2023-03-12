//Components
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="hero mx-auto bg-base-100 mt-6">
      <div className="flex-col lg:flex-row p-12">
        <div>
          <div className="badge mb-4 bg-base-200 p-4 rounded-none border-0">{data.category}</div>
          <h1 className="text-5xl font-bold text-primary">{data.name} </h1>
          <p className="py-6 text-xl">{data.description}</p>
          <div className="text-gray-500 mb-6 flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {data.start}
          </div>
          <h2 className="text-primary text-4xl font-bold mb-6 ">${data.price} ARS</h2>
          <div className="card-actions items-center">
            <ItemCount {...data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
