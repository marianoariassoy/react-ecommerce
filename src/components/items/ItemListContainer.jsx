//Dependencies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

//Components
import ItemList from "./ItemList";
import Loader from "../common/Loader";

const ItemListContainer = () => {
  const { category } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "cursos");
    getDocs(itemCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (!category) {
        setData(data);
      } else {
        const results = data.filter((item) => item.category === category);
        setData(results);
      }
    });
  }, [category]);

  return <>{data ? <ItemList data={data} category={category} /> : <Loader />}</>;
};

export default ItemListContainer;
