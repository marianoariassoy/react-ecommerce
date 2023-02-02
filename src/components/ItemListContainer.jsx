import React from "react";
import Item from "./Item";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="container text-center px-4 py-4">{greeting}</div>

      <main className="container px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <Item />
        <Item />
        <Item />
        <Item />
      </main>
    </>
  );
};

export default ItemListContainer;
