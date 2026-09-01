import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  <Helmet>
  <title>Register | ArtiMart</title>
</Helmet>
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      alert("Email already registered.");
      return;
    }

    const newUser = {
      name,
      email,
      password,
      joinedOn: new Date().toLocaleDateString(),
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join ArtiMart today
            </p>

          </div>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            onClick={handleRegister}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Create Account
          </button>

          <div className="mt-6 text-center">

            <p className="text-gray-600">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="text-orange-500 font-semibold"
            >
              Login Here
            </Link>

          </div>

          <div className="mt-8 border-t pt-6 text-center">

            <p className="text-sm text-gray-500">
              By registering, you agree to
              ArtiMart's Terms & Conditions.
            </p>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Register;