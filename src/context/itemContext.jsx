import React, { useState, useEffect, createContext } from "react";
const url = "/data.json";

export const ItemContext = createContext([]);

export const ItemProvider = ({ children }) => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const getItems = (id) => {
    if (id) return items.filter((item) => item.category === +id);
    return items;
  };

  const getItemsById = (id) => {
    return items.filter((item) => item.id === +id);
  };

  return (
    <ItemContext.Provider
      value={{
        getItemsById,
        getItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
