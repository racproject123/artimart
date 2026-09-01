import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-orange-500">
            ArtiMart
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 font-medium">

          <Link
            to="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-orange-500 transition"
          >
            Products
          </Link>

          <Link
            to="/seller"
            className="hover:text-orange-500 transition"
          >
            Seller
          </Link>

          <Link
            to="/wishlist"
            className="hover:text-orange-500 transition"
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/cart"
            className="hover:text-orange-500 transition"
          >
            🛒 Cart
          </Link>

          <Link
            to="/orders"
            className="hover:text-orange-500 transition"
          >
            Orders
          </Link>

          <Link
            to="/login"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;