import React from "react";
import Item from "./Item";
import Tab from "./Tab";

const ItemListContainer = ({ greeting }) => {
  return (
    <main>
      <Tab />
      <div className="container px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </main>
  );
};

export default ItemListContainer;
