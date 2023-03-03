//Dependencies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import ItemList from "./ItemList";
import Loader from "../common/Loader";

//Utils
import categories from "../../utils/categories";
import getItems from "../../utils/getItems";

const ItemListContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(null);

  useEffect(() => {
    setCategoryTitle(id ? categories[id] : "Todos los cursos");

    getItems().then((data) => {
      if (id) {
        const result = data.filter((item) => item.category === +id);
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
      {data ? <ItemList data={data} /> : <Loader />}
    </>
  );
};

export default ItemListContainer;
