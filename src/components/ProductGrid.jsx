import { useState } from "react";


const products = [
  {
    id: 1,
    name: "Mauris at ultricies",
    price: 9.0,
    badge: "New",
    rating: 5,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d",
  },
  {
    id: 2,
    name: "Donec odio the name",
    price: 11.9,
    badge: "Sale",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e",
  },
  {
    id: 3,
    name: "Quisque volutpat mattis",
    price: 11.9,
    badge: "New",
    rating: 4,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 4,
    name: "Volutpat mattis eros",
    price: 11.9,
    badge: null,
    rating: 0,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c",
  },
  {
    id: 5,
    name: "Brown bear cushion",
    price: 18.9,
    badge: "Sale",
    rating: 3,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },
  {
    id: 6,
    name: "Maecenas quis nunc id",
    price: 18.9,
    badge: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
  },
  {
    id: 7,
    name: "Rose gold necklace",
    price: 11.9,
    badge: "Sale",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599643478518-cbeacb89bbec",
  },
  {
    id: 8,
    name: "Wedding flower vase",
    price: 11.9,
    badge: null,
    rating: 2,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
  },
  {
    id: 9,
    name: "Quisque volutpat mattis",
    price: 11.9,
    badge: "New",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
  },
  {
    id: 10,
    name: "Lorem ipsum dolor",
    price: 29.0,
    badge: null,
    rating: 0,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    id: 11,
    name: "The adventure begins",
    price: 29.0,
    badge: "Sale",
    rating: 5,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
  },
  {
    id: 12,
    name: "Elegant pearl ring",
    price: 21.5,
    badge: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    id: 13,
    name: "Classic silver earrings",
    price: 14.9,
    badge: "New",
    rating: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
  },
  {
    id: 14,
    name: "Minimal gold bracelet",
    price: 19.9,
    badge: null,
    rating: 3,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
  },
  {
    id: 15,
    name: "Luxury diamond ring",
    price: 39.9,
    badge: "Sale",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  },
  {
    id: 16,
    name: "Soft flower decor",
    price: 12.5,
    badge: null,
    rating: 2,
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  },
  {
    id: 17,
    name: "Elegant wedding heels",
    price: 49.0,
    badge: "New",
    rating: 4,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 18,
    name: "Classic hand purse",
    price: 24.9,
    badge: null,
    rating: 3,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
  },
  {
    id: 19,
    name: "Premium necklace set",
    price: 34.9,
    badge: "Sale",
    rating: 5,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
  },
  {
    id: 20,
    name: "Crystal drop earrings",
    price: 17.9,
    badge: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98",
  },
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // 1. Logic to calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // 2. Logic for page numbers
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top when changing page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          Showing {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, products.length)} of {products.length}{" "}
          products
        </p>
        <select className="border px-3 py-1 text-sm outline-none focus:border-black">
          <option>Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden bg-gray-100">
              {item.badge && (
                <span
                  className={`absolute top-3 right-3 z-10 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full ${
                    item.badge === "Sale" ? "bg-red-500" : "bg-pink-400"
                  }`}
                >
                  {item.badge}
                </span>
              )}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-sm text-gray-700 hover:text-pink-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-pink-500 font-bold mt-1">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12 pb-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border text-sm disabled:opacity-30 hover:bg-gray-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 text-sm border transition-colors ${
                currentPage === index + 1
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 hover:border-black"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border text-sm disabled:opacity-30 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
