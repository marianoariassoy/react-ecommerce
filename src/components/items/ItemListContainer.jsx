import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import categories from "../../utils/categories";
import getItems from "../../utils/getItems";
const url = "http://localhost:5173/data.json";
let category = null;

const ItemListContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    category = id ? categories[id] : "Todos los curso";
    getItems(url).then((data) => {
      if (id) {
        const result = data.filter((item) => item.category === parseInt(id));
        setData(result);
      } else {
        setData(data);
      }
    });
  }, [id]);

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold mb-20 text-center">{category} 🚀</h1>
      </div>
      {data && <ItemList data={data} />}
    </>
  );
};

export default ItemListContainer;
