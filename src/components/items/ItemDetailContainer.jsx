import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <main>{data && <ItemDetail data={data} />}</main>;
};

export default ItemDetailContainer;
