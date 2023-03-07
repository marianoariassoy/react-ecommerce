//Dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

//Components
import ItemDetail from "./ItemDetail";
import Loader from "../common/Loader";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "cursos", id);
    getDoc(ref).then((snapshot) => {
      if (snapshot.exists()) {
        setData({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log("No such document!");
      }
    });
  }, [id]);

  return <>{data ? <ItemDetail data={data} /> : <Loader />}</>;
};

export default ItemDetailContainer;
