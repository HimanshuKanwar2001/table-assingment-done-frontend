import React from "react";
import CustomDropdown from "../ui/CustomDropdown";

const Filters = ({ filters, setFilters, products }) => {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const priceRanges = ["All", "< ₹500", "₹500 - ₹2000", "> ₹2000"];
  const statuses = ["All", "Active", "Inactive"];

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Category Filter */}
      <div className="relative">
        <CustomDropdown label="Category" options={categories} selected={filters.category} onSelect={(category) => setFilters((f) => ({ ...f, category }))} />
        {/* <select
          className="appearance-none bg-white text-sm text-gray-700 px-4 py-2 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={filters.category}
          onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select> */}
        {/* <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
          ▼
        </div> */}
      </div>

      {/* Price Filter */}
      <div className="relative">
        <CustomDropdown label="Price" options={priceRanges} selected={filters.price} onSelect={(price) => setFilters((f) => ({ ...f, price }))} />
        {/* <select
          className="appearance-none bg-white text-sm text-gray-700 px-4 py-2 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={filters.price}
          onChange={(e) => setFilters((f) => ({ ...f, price: e.target.value }))}
        >
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select> */}
        {/* <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
          ▼
        </div> */}
      </div>

      {/* Status Filter */}
      <div className="relative">
        <CustomDropdown label="Status" options={statuses} selected={filters.status} onSelect={(status) => setFilters((f) => ({ ...f, status }))} />
        {/* <select
          className="appearance-none bg-white text-sm text-gray-700 px-4 py-2 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={filters.status}
          onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select> */}
        {/* <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
          ▼
        </div> */}
      </div>
    </div>
  );
};

export default Filters;
