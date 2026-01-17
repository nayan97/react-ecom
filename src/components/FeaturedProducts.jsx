import React from "react";

const products = [
  {
    id: 1,
    name: "Maecenas quis nunc id",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 28.72,
    oldPrice: 35.90,
    rating: 0,
    badge: null,
  },
  {
    id: 2,
    name: "Quisque volutpat mattis",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d",
    price: 11.90,
    oldPrice: null,
    rating: 5,
    badge: "New",
  },
  {
    id: 3,
    name: "Volutpat mattis eros",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c",
    price: 11.90,
    oldPrice: null,
    rating: 0,
    badge: null,
  },
  {
    id: 4,
    name: "Donec odio the name",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e",
    price: 11.90,
    oldPrice: null,
    rating: 5,
    badge: "Sale",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100">
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="mt-4 text-center">
                <h3 className="text-gray-700 text-sm">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mt-2">
                  <span className="text-orange-400 font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through text-sm">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? "text-orange-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.176 0l-3.386 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.049 9.402c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.975z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
