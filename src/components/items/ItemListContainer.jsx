import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import categories from "../../utils/categories";
import getItems from "../../utils/getItems";
const url = "/data.json";
let categoryTitle = null;

const ItemListContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    categoryTitle = id ? categories[id] : "Todos los curso";
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
        <h1 className="text-5xl font-bold mb-20 text-center">{categoryTitle} 🚀</h1>
      </div>
      {data && <ItemList data={data} />}
    </>
  );
};

export default ItemListContainer;
