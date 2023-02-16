import Item from "./Item";

const ItemContainer = ({ data }) => {
  return (
    <div className="container px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ItemContainer;
