import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  <Helmet>
  <title>Login | ArtiMart</title>
</Helmet>
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert("Login Successful!");

    navigate("/");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your ArtiMart account
            </p>

          </div>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <p className="text-right text-sm text-orange-500 mb-6 cursor-pointer">
            Forgot Password?
          </p>

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>

          <div className="mt-6 text-center">

            <p className="text-gray-600">
              Don't have an account?
            </p>

            <Link
              to="/register"
              className="text-orange-500 font-semibold"
            >
              Register Here
            </Link>

          </div>

          <div className="mt-8 border-t pt-6 text-center">

            <p className="text-sm text-gray-500">
              By logging in, you agree to
              ArtiMart's Terms & Conditions.
            </p>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Login;