import ItemList from "./ItemList";
import products from "../data.json";

const ItemListContainer = ({ greeting }) => {
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject("No hay datos");
      }
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getProducts();
      console.log(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }
  fetchingData();

  return (
    <main>
      <div className="container hero text-center mb-12">
        <h1 className="text-5xl font-extrabold">{greeting}</h1>
      </div>

      <ItemList products={products} />
    </main>
  );
};

export default ItemListContainer;
