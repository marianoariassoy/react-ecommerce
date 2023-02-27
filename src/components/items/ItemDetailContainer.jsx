//Dependencies
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import ItemDetail from "./ItemDetail";

//Context
import { ItemContext } from "../../context/itemContext";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const { getItemsById } = useContext(ItemContext);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData(getItemsById(id));
  // }, []);

  return <>{<ItemDetail data={getItemsById(id)} />}</>;
};

export default ItemDetailContainer;
