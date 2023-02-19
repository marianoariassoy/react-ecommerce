import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getItems from "../../utils/getItems";
const url = "/data.json";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getItems(url).then((data) => {
      if (id) {
        const data = data.filter((item) => item.category === parseInt(id));
        setData(result);
      } else {
        setData(data);
      }
    });
  }, []);

  return <>{data && <ItemDetail data={data[0]} />}</>;
};

export default ItemDetailContainer;
