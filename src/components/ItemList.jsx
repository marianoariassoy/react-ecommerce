import Item from "./Item";

const ItemContainer = ({ products }) => {
  return (
    <div className="container px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((item) => (
        <Item key={item.id} name={item.name} description={item.description} price={item.price} stock={item.stock} />
      ))}
    </div>
  );
};

export default ItemContainer;
