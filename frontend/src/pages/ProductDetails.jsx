import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function ProductDetails() {
  <Helmet>
  <title>{name} | ArtiMart</title>

  <meta
    name="description"
    content={description}
  />
</Helmet>
  const location = useLocation();

  const {
    image,
    name,
    price,
    description,
    category,
  } = location.state || {};

  if (!name) {
    return (
      <div>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-500">
            Product Not Found
          </h1>
        </div>

        <Footer />
      </div>
    );
  }

  const addToCart = () => {
    const cartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cartItems.find(
      (item) => item.name === name
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({
        image,
        name,
        price,
        description,
        category,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

    alert("Product Added To Cart!");
  };

  const addToWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = wishlist.find(
      (item) => item.name === name
    );

    if (alreadyExists) {
      alert("Already In Wishlist!");
      return;
    }

    wishlist.push({
      image,
      name,
      price,
      description,
      category,
    });

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added To Wishlist!");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">

        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">

          <div className="grid md:grid-cols-2 gap-10 p-8">

            {/* Product Image */}
            <div>

              <img
                src={image}
                alt={name}
                className="w-full h-[450px] object-cover rounded-xl"
              />

            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">

              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full w-fit font-semibold mb-4">
                {category || "Handmade Product"}
              </span>

              <h1 className="text-4xl font-bold mb-4">
                {name}
              </h1>

              <div className="flex items-center gap-2 mb-4">

                <span className="text-yellow-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </span>

                <span className="text-gray-500">
                  (4.8 Rating)
                </span>

              </div>

              <p className="text-3xl font-bold text-orange-500 mb-6">
                ₹{price}
              </p>

              <p className="text-gray-600 leading-7 mb-6">
                {description}
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">

                <p className="text-green-600 font-semibold">
                  ✓ In Stock
                </p>

                <p className="text-gray-500 mt-1">
                  Free Delivery Available
                </p>

                <p className="text-gray-500">
                  Estimated Delivery: 3-5 Days
                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <button
                  onClick={addToCart}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Add To Cart
                </button>

                <button
                  onClick={addToWishlist}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Add To Wishlist
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;