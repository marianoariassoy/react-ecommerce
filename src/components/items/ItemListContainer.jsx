import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((data) => {
        if (id) {
          const result = data.filter((item) => item.category === parseInt(id));
          setData(result);
        } else {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <main>
      <div className="hero mb-12">
        <h1 className="text-5xl font-bold">Cursos y Carreras</h1>
      </div>
      {data && <ItemList data={data} />}
    </main>
  );
};

export default ItemListContainer;
