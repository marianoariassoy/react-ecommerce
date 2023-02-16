import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
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

  return (
    <main>
      <div className="hero mb-12">
        <h1 className="text-5xl font-bold text-primary">Our Products</h1>
      </div>
      {data && <ItemList data={data} />}
    </main>
  );
};

export default ItemListContainer;
