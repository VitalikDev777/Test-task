"use client";

import Link from "next/link";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../localData/products";

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice !== "" ? product.price >= Number(minPrice) : true;
    const matchesMaxPrice = maxPrice !== "" ? product.price <= Number(maxPrice) : true;
    return matchesSearch && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="container mx-auto p-8">
      <input
        type="text"
        placeholder="Search Products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-6 w-full"
      />


      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        onClick={() => setIsModalOpen(true)}
      >
        Filter by Price
      </button>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Filter by Price</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium">Min Price ($)</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
                className="border p-2 w-full"
                min={0}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Max Price ($)</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                className="border p-2 w-full"
                min={0}
              />
            </div>

            <div className="flex justify-between">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
