 import { Link } from "react-router-dom";

function ProductCard({
  image,
  name,
  price,
  description,
  category,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        {category && (
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {category}
          </span>
        )}

        <h2 className="text-xl font-bold mb-2 line-clamp-1">
          {name}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between items-center mb-4">

          <p className="text-2xl font-bold text-orange-500">
            ₹{price}
          </p>

          <span className="text-green-600 text-sm font-medium">
            In Stock
          </span>

        </div>

        <Link
          to="/product"
          state={{
            image,
            name,
            price,
            description,
            category,
          }}
        >
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;