import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SellerDashboard() {
  <Helmet>
  <title>Seller Dashboard | ArtiMart</title>
</Helmet>
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const totalProducts = products.length;

  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum +
      (order.totalAmount ||
        order.items.reduce(
          (subtotal, item) =>
            subtotal +
            Number(item.price) *
              (item.quantity || 1),
          0
        )),
    0
  );

  const editProduct = (index) => {
    const product = products[index];

    const newName = prompt(
      "Product Name",
      product.name
    );

    const newPrice = prompt(
      "Product Price",
      product.price
    );

    const newDescription = prompt(
      "Description",
      product.description
    );

    if (
      !newName?.trim() ||
      !newPrice?.trim() ||
      !newDescription?.trim()
    ) {
      alert("All fields are required.");
      return;
    }

    const updatedProducts = [...products];

    updatedProducts[index] = {
      ...product,
      name: newName,
      price: newPrice,
      description: newDescription,
    };

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    alert("Product Updated Successfully!");
  };

  const removeProduct = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this product?"
    );

    if (!confirmDelete) return;

    const updatedProducts = products.filter(
      (_, i) => i !== index
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-8">
            Seller Dashboard
          </h1>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-gray-500">
                Total Products
              </h3>

              <p className="text-4xl font-bold text-orange-500 mt-2">
                {totalProducts}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-gray-500">
                Total Revenue
              </h3>

              <p className="text-4xl font-bold text-green-500 mt-2">
                ₹{totalRevenue}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-gray-500">
                Total Orders
              </h3>

              <p className="text-4xl font-bold text-blue-500 mt-2">
                {totalOrders}
              </p>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">

            <div className="flex justify-between items-center flex-wrap gap-4">

              <div>
                <h2 className="text-2xl font-bold">
                  Manage Products
                </h2>

                <p className="text-gray-500">
                  Add, edit or remove products.
                </p>
              </div>

              <Link to="/add-product">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                  Add Product
                </button>
              </Link>

            </div>

          </div>

          {/* Product List */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">

            <h2 className="text-2xl font-bold mb-6">
              Your Products
            </h2>

            {products.length === 0 ? (
              <div className="text-center py-10">

                <h3 className="text-2xl font-bold">
                  No Products Added
                </h3>

                <p className="text-gray-500 mt-2">
                  Start by adding your first product.
                </p>

              </div>
            ) : (
              <div className="space-y-5">

                {products.map((product, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4"
                  >

                    <div className="flex items-center gap-4">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />

                      <div>

                        <h3 className="font-bold text-lg">
                          {product.name}
                        </h3>

                        <p className="text-orange-500 font-bold">
                          ₹{product.price}
                        </p>

                        <p className="text-gray-500 text-sm">
                          {product.category}
                        </p>

                        <p className="text-gray-600 text-sm mt-1">
                          {product.description}
                        </p>

                      </div>

                    </div>

                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          editProduct(index)
                        }
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          removeProduct(index)
                        }
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Orders */}
          <div className="bg-white p-6 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Customer Orders
            </h2>

            {orders.length === 0 ? (
              <p className="text-gray-500">
                No orders received yet.
              </p>
            ) : (
              orders
                .slice()
                .reverse()
                .map((order, index) => (
                  <div
                    key={index}
                    className="border-b py-4"
                  >

                    <h3 className="font-bold text-lg">
                      {order.orderId ||
                        `Order #${index + 1}`}
                    </h3>

                    <p>
                      Customer:{" "}
                      {order.customerName}
                    </p>

                    <p>
                      Phone: {order.phone}
                    </p>

                    <p>
                      Date: {order.date}
                    </p>

                    <p>
                      Total: ₹
                      {order.totalAmount}
                    </p>

                    <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {order.status ||
                        "Delivered"}
                    </span>

                  </div>
                ))
            )}

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default SellerDashboard;