//Dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import ItemDetail from "./ItemDetail";
import Loader from "../common/Loader";

//Utils
import getItems from "../../utils/getItems";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getItems().then((data) => {
      if (id) {
        const result = data.filter((item) => item.id === +id);
        setData(result);
      } else {
        setData(data);
      }
    });
  }, []);

  return <>{data ? <ItemDetail data={data[0]} /> : <Loader />}</>;
};

export default ItemDetailContainer;
