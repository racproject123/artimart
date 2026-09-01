import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Wishlist() {
  <Helmet>
  <title>Wishlist | ArtiMart</title>
</Helmet>
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlistItems(items);
  }, []);

  const updateWishlist = (items) => {
    setWishlistItems(items);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(items)
    );
  };

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlistItems.filter(
      (_, i) => i !== index
    );

    updateWishlist(updatedWishlist);
  };

  const moveToCart = (item, index) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...item,
      quantity: 1,
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    removeFromWishlist(index);

    alert("Product moved to cart!");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            My Wishlist ❤️
          </h1>

          <span className="bg-orange-500 text-white px-4 py-2 rounded-full">
            {wishlistItems.length} Items
          </span>

        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-10 text-center">

            <h2 className="text-3xl font-bold mb-3">
              ❤️ Wishlist is Empty
            </h2>

            <p className="text-gray-500">
              Save your favorite products here.
            </p>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {item.description}
                  </p>

                  <p className="text-orange-500 font-bold text-2xl mt-3">
                    ₹{item.price}
                  </p>

                  <div className="flex gap-2 mt-5">

                    <button
                      onClick={() =>
                        moveToCart(item, index)
                      }
                      className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                      Move To Cart
                    </button>

                    <button
                      onClick={() =>
                        removeFromWishlist(index)
                      }
                      className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;