import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    const updatedItems = items.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(updatedItems);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);

    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );
  };

  const increaseQuantity = (index) => {
    const updated = [...cartItems];

    updated[index].quantity += 1;

    updateCart(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...cartItems];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }

    updateCart(updated);
  };

  const removeItem = (index) => {
    const updated = cartItems.filter(
      (_, i) => i !== index
    );

    updateCart(updated);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price) * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-6 md:p-10">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-10 text-center">

            <h2 className="text-3xl font-bold mb-4">
              🛒 Your Cart is Empty
            </h2>

            <p className="text-gray-500 mb-6">
              Add products to start shopping.
            </p>

            <Link to="/products">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                Browse Products
              </button>
            </Link>

          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 mb-4 flex flex-col md:flex-row justify-between gap-6"
              >

                <div className="flex gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-lg object-cover"
                  />

                  <div>

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      {item.description}
                    </p>

                    <p className="text-orange-500 font-bold mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() =>
                          decreaseQuantity(index)
                        }
                        className="bg-gray-200 px-3 py-1 rounded-lg"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(index)
                        }
                        className="bg-gray-200 px-3 py-1 rounded-lg"
                      >
                        +
                      </button>

                    </div>

                    <p className="font-semibold mt-3">
                      Subtotal: ₹
                      {Number(item.price) *
                        item.quantity}
                    </p>

                  </div>

                </div>

                <div className="flex items-center">

                  <button
                    onClick={() =>
                      removeItem(index)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">

              <div className="flex justify-between mb-4">

                <h3 className="text-lg font-semibold">
                  Total Items
                </h3>

                <p>{totalItems}</p>

              </div>

              <div className="flex justify-between mb-6">

                <h2 className="text-2xl font-bold">
                  Total Amount
                </h2>

                <h2 className="text-2xl font-bold text-green-600">
                  ₹{total}
                </h2>

              </div>

              <div className="flex flex-wrap gap-4">

                <Link to="/products">
                  <button className="bg-gray-500 text-white px-6 py-3 rounded-lg">
                    Continue Shopping
                  </button>
                </Link>

                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg"
                >
                  Clear Cart
                </button>

                <Link to="/checkout">
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg">
                    Proceed To Checkout
                  </button>
                </Link>

              </div>

            </div>
          </>
        )}

      </div>

      <Footer />
    </div>
  );
}

export default Cart;