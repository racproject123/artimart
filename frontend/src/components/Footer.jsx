import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            ArtiMart
          </h2>

          <p className="mt-4 text-gray-300">
            Discover and support talented artisans from across India.
            Handmade products crafted with passion and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-orange-500"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/seller"
                className="hover:text-orange-500"
              >
                Seller Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="hover:text-orange-500"
              >
                Cart
              </Link>
            </li>

          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Customer
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <Link
                to="/wishlist"
                className="hover:text-orange-500"
              >
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                className="hover:text-orange-500"
              >
                Order History
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-orange-500"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="hover:text-orange-500"
              >
                Register
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">
            Contact Us
          </h3>

          <p className="text-gray-300">
            📧 support@artimart.com
          </p>

          <p className="text-gray-300 mt-2">
            📞 +91 9876543210
          </p>

          <p className="text-gray-300 mt-2">
            📍 India
          </p>

          <div className="flex gap-4 mt-5 text-2xl">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 ArtiMart. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;