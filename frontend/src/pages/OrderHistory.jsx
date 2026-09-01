import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderHistory() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-8">
            Order History
          </h1>

          {orders.length === 0 ? (
            <div className="bg-white p-10 rounded-xl shadow-lg text-center">

              <h2 className="text-3xl font-bold mb-3">
                📦 No Orders Yet
              </h2>

              <p className="text-gray-500">
                Place your first order to see it here.
              </p>

            </div>
          ) : (
            orders
              .slice()
              .reverse()
              .map((order, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >

                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row justify-between mb-6">

                    <div>

                      <h2 className="text-2xl font-bold">
                        {order.orderId ||
                          `Order #${orders.length - index}`}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Date: {order.date}
                      </p>

                      {order.time && (
                        <p className="text-gray-500">
                          Time: {order.time}
                        </p>
                      )}

                    </div>

                    <div className="mt-3 md:mt-0">

                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                        {order.status || "Confirmed"}
                      </span>

                    </div>

                  </div>

                  {/* Customer Info */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">

                    <h3 className="font-bold text-lg mb-3">
                      Customer Details
                    </h3>

                    <p>
                      <strong>Name:</strong>{" "}
                      {order.customerName}
                    </p>

                    {order.email && (
                      <p>
                        <strong>Email:</strong>{" "}
                        {order.email}
                      </p>
                    )}

                    <p>
                      <strong>Phone:</strong>{" "}
                      {order.phone}
                    </p>

                    <p>
                      <strong>Address:</strong>{" "}
                      {order.address}
                    </p>

                    {order.paymentMethod && (
                      <p>
                        <strong>Payment:</strong>{" "}
                        {order.paymentMethod}
                      </p>
                    )}

                  </div>

                  {/* Products */}
                  <div>

                    <h3 className="font-bold text-lg mb-4">
                      Ordered Products
                    </h3>

                    {order.items.map(
                      (item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex flex-col md:flex-row justify-between items-center border-b py-4"
                        >

                          <div className="flex items-center gap-4">

                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                            )}

                            <div>

                              <h4 className="font-bold">
                                {item.name}
                              </h4>

                              <p className="text-gray-500">
                                Qty:{" "}
                                {item.quantity || 1}
                              </p>

                            </div>

                          </div>

                          <div className="text-right">

                            <p className="font-bold text-orange-500">
                              ₹
                              {Number(
                                item.price
                              ) *
                                (item.quantity ||
                                  1)}
                            </p>

                          </div>

                        </div>
                      )
                    )}

                  </div>

                  {/* Total */}
                  <div className="mt-6 flex justify-between items-center border-t pt-4">

                    <h3 className="text-xl font-bold">
                      Total Amount
                    </h3>

                    <h3 className="text-2xl font-bold text-green-600">
                      ₹
                      {order.totalAmount ||
                        order.items.reduce(
                          (sum, item) =>
                            sum +
                            Number(item.price) *
                              (item.quantity ||
                                1),
                          0
                        )}
                    </h3>

                  </div>

                </div>
              ))
          )}

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default OrderHistory;