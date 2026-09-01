import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <Helmet>
  <title>
    ArtiMart | Handmade Crafts Marketplace
  </title>

  <meta
    name="description"
    content="Discover handmade crafts, pottery, paintings, jewellery and artisan products from talented creators across India."
  />

  <meta
    name="keywords"
    content="handmade crafts, pottery, paintings, jewellery, artisan marketplace"
  />
</Helmet>
      <Navbar />

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.agoda.com/wp-content/uploads/2024/01/Indian-blue-pottery.jpg')",
        }}
      >
        <div className="min-h-screen bg-black/70 flex flex-col justify-center items-center text-center px-6">

          <h2 className="text-3xl md:text-5xl text-white">
            Welcome To
          </h2>

          <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mt-4">
            ArtiMart
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mt-6 max-w-3xl">
            Explore authentic handmade products crafted by talented Indian artisans.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link to="/products">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold">
                Shop Now
              </button>
            </Link>

            <Link to="/seller">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Become A Seller
              </button>
            </Link>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-white">

            <div>
              <div className="text-5xl">🏺</div>
              <p className="mt-3">Authentic Crafts</p>
            </div>

            <div>
              <div className="text-5xl">🚚</div>
              <p className="mt-3">Fast Delivery</p>
            </div>

            <div>
              <div className="text-5xl">🔒</div>
              <p className="mt-3">Secure Payments</p>
            </div>

            <div>
              <div className="text-5xl">⭐</div>
              <p className="mt-3">Trusted Sellers</p>
            </div>

          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              500+
            </h2>
            <p className="text-gray-600 mt-2">
              Products
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              100+
            </h2>
            <p className="text-gray-600 mt-2">
              Artisans
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              1000+
            </h2>
            <p className="text-gray-600 mt-2">
              Orders
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              20+
            </h2>
            <p className="text-gray-600 mt-2">
              Categories
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">

            <img
              src="https://i.pinimg.com/originals/aa/dd/26/aadd2622e99dca1b0c1a76706328ba42.jpg"
              alt="Necklace"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="font-bold text-xl">
                Handmade Necklace
              </h3>

              <p className="text-orange-500 font-bold mt-2">
                ₹899
              </p>

            </div>

          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">

            <img
              src="https://m.media-amazon.com/images/I/91wjGaN-jbL._AC_SL1500_.jpg"
              alt="Wood Craft"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="font-bold text-xl">
                Wooden Craft
              </h3>

              <p className="text-orange-500 font-bold mt-2">
                ₹1299
              </p>

            </div>

          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">

            <img
              src="https://i2.wp.com/img0.etsystatic.com/127/0/11373970/il_fullxfull.1011036372_lyvm.jpg"
              alt="Clay Pot"
              className="h-64 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="font-bold text-xl">
                Clay Pot
              </h3>

              <p className="text-orange-500 font-bold mt-2">
                ₹499
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="py-20 bg-orange-50">

        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl">🏺</div>
            <h3 className="font-bold mt-4">Pottery</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl">🧺</div>
            <h3 className="font-bold mt-4">Baskets</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl">🎨</div>
            <h3 className="font-bold mt-4">Paintings</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl">🪵</div>
            <h3 className="font-bold mt-4">Wood Crafts</h3>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose ArtiMart?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

          <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="font-bold text-xl">
              Handmade Products
            </h3>
            <p className="text-gray-600 mt-3">
              Genuine artisan-made products.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="font-bold text-xl">
              Support Artisans
            </h3>
            <p className="text-gray-600 mt-3">
              Help local creators grow.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="font-bold text-xl">
              Eco Friendly
            </h3>
            <p className="text-gray-600 mt-3">
              Sustainable craftsmanship.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="font-bold text-xl">
              Secure Shopping
            </h3>
            <p className="text-gray-600 mt-3">
              Safe and reliable transactions.
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">

        <h2 className="text-4xl font-bold text-center mb-12">
          How ArtiMart Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="font-bold text-xl">
              Browse Products
            </h3>
            <p className="text-gray-600 mt-3">
              Explore handcrafted items from talented artisans.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="font-bold text-xl">
              Place Order
            </h3>
            <p className="text-gray-600 mt-3">
              Order products securely and easily.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-xl">
              Fast Delivery
            </h3>
            <p className="text-gray-600 mt-3">
              Receive products at your doorstep.
            </p>
          </div>

        </div>

      </section>

      {/* Seller CTA */}
      <section className="bg-orange-500 text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Ready To Sell Your Crafts?
        </h2>

        <p className="text-lg mb-8">
          Join ArtiMart and reach customers across India.
        </p>

        <Link to="/seller">
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Become A Seller
          </button>
        </Link>

      </section>

      <Footer />
    </div>
  );
}

export default Home;