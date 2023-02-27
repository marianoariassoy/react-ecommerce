//Dependencies
import { useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import { ItemContext } from "../../context/itemContext";

//Components
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const { getItemsById } = useContext(ItemContext);

  return <ItemDetail data={getItemsById(id)} />;
};

export default ItemDetailContainer;
