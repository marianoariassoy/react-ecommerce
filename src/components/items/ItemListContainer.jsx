//Dependencies
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Context
import { ItemContext } from "../../context/itemContext";

//Components
import ItemList from "./ItemList";

//Utils
import categories from "../../utils/categories";

const ItemListContainer = () => {
  let { id } = useParams();
  const { getItems } = useContext(ItemContext);
  const [categoryTitle, setCategoryTitle] = useState(null);

  useEffect(() => {
    setCategoryTitle(id ? categories[id] : "Todos los cursos");
  }, [id]);

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold mb-20 text-center">{categoryTitle} 🚀</h1>
      </div>
      {<ItemList data={getItems(id)} />}
    </>
  );
};

export default ItemListContainer;
