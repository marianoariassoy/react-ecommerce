import Item from "./Item";

const ItemListContainer = ({ greeting }) => {
  return (
    <main>
      <div className="container hero h-52">
        <h1 className="text-6xl font-extrabold">{greeting}</h1>
      </div>
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
