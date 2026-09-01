import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !price.trim() ||
      !image.trim() ||
      !description.trim() ||
      !category.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (Number(price) <= 0) {
      alert("Price must be greater than 0.");
      return;
    }

    if (!image.startsWith("http")) {
      alert("Please enter a valid image URL.");
      return;
    }

    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image,
      description,
      category,
      createdAt: new Date().toLocaleDateString(),
    };

    existingProducts.push(newProduct);

    localStorage.setItem(
      "products",
      JSON.stringify(existingProducts)
    );

    alert("Product Added Successfully!");

    setName("");
    setPrice("");
    setImage("");
    setDescription("");
    setCategory("");

    navigate("/seller");
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setImage("");
    setDescription("");
    setCategory("");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10 px-4">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-8">
            Add New Product
          </h1>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-6">
                Product Information
              </h2>

              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-lg mb-4"
              />

              <input
                type="number"
                placeholder="Price (₹)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-3 rounded-lg mb-4"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-3 rounded-lg mb-4"
              >
                <option value="">
                  Select Category
                </option>

                <option value="Pottery">
                  Pottery
                </option>

                <option value="Paintings">
                  Paintings
                </option>

                <option value="Wood Crafts">
                  Wood Crafts
                </option>

                <option value="Baskets">
                  Baskets
                </option>

                <option value="Jewellery">
                  Jewellery
                </option>
              </select>

              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border p-3 rounded-lg mb-4"
              />

              <textarea
                placeholder="Product Description"
                value={description}
                maxLength={300}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-3 rounded-lg h-32"
              />

              <p className="text-sm text-gray-500 mt-2 mb-4">
                {description.length}/300 characters
              </p>

              <div className="flex gap-4">

                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
                >
                  Add Product
                </button>

                <button
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
                >
                  Reset
                </button>

              </div>

            </div>

            {/* Preview Section */}
            <div className="bg-white shadow-lg rounded-xl p-6">

              <h2 className="text-2xl font-semibold mb-6">
                Product Preview
              </h2>

              {image ? (
                <>
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <h3 className="text-2xl font-bold mt-4">
                    {name || "Product Name"}
                  </h3>

                  <p className="text-orange-500 text-xl font-bold mt-2">
                    ₹{price || "0"}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {category || "Category"}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {description ||
                      "Product description will appear here."}
                  </p>
                </>
              ) : (
                <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
                  Product Preview
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default AddProduct;