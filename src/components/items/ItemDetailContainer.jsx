import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((item) => item.id === parseInt(id));
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <>{data && <ItemDetail data={data[0]} />}</>;
};

export default ItemDetailContainer;
