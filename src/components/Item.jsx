const Item = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="mb-4">If a dog chews shoes whose shoes does he choose?</p>

        <div className="card-actions justify-between">
          <span className="btn btn-primary">$2000</span>
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
