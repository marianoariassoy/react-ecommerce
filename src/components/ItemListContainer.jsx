import React from "react";
import ItemContainer from "./ItemContainer";

const ItemListContainer = ({ greeting }) => {
  return (
    <main>
      <div className="container hero text-center mb-12">
        <h1 className="text-5xl font-extrabold">{greeting}</h1>
      </div>

      <ItemContainer />
    </main>
  );
};

export default ItemListContainer;
