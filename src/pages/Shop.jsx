import React from "react";
import Sidebar from "./../components/Sidebar";
import ProductGrid from "./../components/ProductGrid";

const Shop = () => {
  return (
    <section className="bg-white">
      {/* Breadcrumb Section */}
      <div className="relative bg-pink-100 h-48 flex items-start pt-12 px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Jewelry</h1>

          {/* Breadcrumb Path */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-gray-900">
                    Jewelry
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <Sidebar />

          {/* Products */}
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
