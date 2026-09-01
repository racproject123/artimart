import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  const placeOrder = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !address.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (phone.length < 10) {
      alert("Enter a valid phone number.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const previousOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      orderId: "ARTI" + Date.now(),
      customerName: name,
      email,
      phone,
      address,
      paymentMethod,
      items: cartItems,
      totalAmount,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      status: "Confirmed",
    };

    previousOrders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(previousOrders)
    );

    localStorage.removeItem("cart");

    alert("Order Placed Successfully!");

    navigate("/orders");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">

        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-8">
            Checkout
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              placeholder="Delivery Address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              className="w-full border p-3 rounded-lg mb-4 h-32"
            />

            <select
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value)
              }
              className="w-full border p-3 rounded-lg mb-6"
            >
              <option>
                Cash on Delivery
              </option>

              <option>
                UPI Payment
              </option>

              <option>
                Debit Card
              </option>

              <option>
                Credit Card
              </option>
            </select>

            <div className="bg-orange-50 rounded-lg p-4 mb-6">

              <h2 className="text-xl font-bold mb-3">
                Order Summary
              </h2>

              <p>
                Total Items: {cartItems.length}
              </p>

              <p className="text-green-600 font-bold mt-2">
                Total Amount: ₹{totalAmount}
              </p>

            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Checkout;