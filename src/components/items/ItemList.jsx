//Components
import Item from "./Item";

const ItemContainer = ({ data, category }) => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold mb-20 text-center">{category || "Todos los cursos"} 🚀</h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default ItemContainer;
