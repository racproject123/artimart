import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Products() {
 
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const defaultProducts = [
    {
      name: "Handmade Bag",
      price: "699",
      image:
        "https://i.pinimg.com/originals/a6/8c/55/a68c55465946b9f1fe9d939e8f669a4c.jpg",
      description:
        "Eco-friendly handmade bag crafted by skilled local artisans using sustainable materials.",
      category: "Bag",
    },

    {
      name: "Wooden Craft",
      price: "1299",
      image:
        "https://m.media-amazon.com/images/I/91wjGaN-jbL._AC_SL1500_.jpg",
      description:
        "Beautiful handcrafted wooden decor piece made from premium quality wood.",
      category: "Wood Crafts",
    },

    {
      name: "Handmade Necklace",
      price: "899",
      image:
        "https://i.pinimg.com/originals/aa/dd/26/aadd2622e99dca1b0c1a76706328ba42.jpg",
      description:
        "Traditional artisan necklace designed with intricate craftsmanship and elegant details.",
      category: "Necklace",
    },

    {
      name: "Handmade Painting",
      price: "1499",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.WGHU03JJKH6ve6y8qtdDvAHaHa?r=0&pid=Api&P=0&h=180",
      description:
        "Unique handmade painting created by talented artists to enhance your home decor.",
      category: "Painting",
    },

    {
      name: "Bamboo Basket",
      price: "599",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.BmHnqV4P5JVxl9VQ9iAmGgHaFj?r=0&pid=Api&P=0&h=180",
      description:
        "Durable and eco-friendly bamboo basket perfect for storage and decoration.",
      category: "Basket",
    },

    {
      name: "Clay Pot",
      price: "499",
      image:
        "https://i2.wp.com/img0.etsystatic.com/127/0/11373970/il_fullxfull.1011036372_lyvm.jpg",
      description:
        "Beautiful handmade terracotta clay pot crafted by local artisans, ideal for home decor and gardening.",
      category: "Pot",
    },
  ];

  const addedProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  const allProducts = [
    ...defaultProducts,
    ...addedProducts,
  ];

  const filteredProducts = allProducts.filter(
    (product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-10">

        <h1 className="text-5xl font-bold text-center mb-4">
          Explore Handmade Products
        </h1>

        <p className="text-center text-gray-500 mb-10 px-4">
          Discover unique handcrafted products made by talented
          artisans across India.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 px-4 mb-8">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border p-3 rounded-lg w-full md:w-96 shadow-sm"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border p-3 rounded-lg shadow-sm"
          >
            <option>All Categories</option>
            <option>Bag</option>
            <option>Necklace</option>
            <option>Painting</option>
            <option>Wood Crafts</option>
            <option>Basket</option>
            <option>Pot</option>
          </select>

        </div>

        <p className="text-center text-gray-600 mb-8">
          Showing {filteredProducts.length} Products
        </p>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-gray-500">
              No Products Found
            </h2>

            <p className="text-gray-400 mt-2">
              Try searching with another keyword.
            </p>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">

            {filteredProducts.map(
              (product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                />
              )
            )}

          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}

export default Products;