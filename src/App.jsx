import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import ProductTable from "./components/ProductTable";
import { Atom } from "react-loading-indicators";
import { data } from "./data/data";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
    status: "All",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.udhhyog.com/v1/test", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
    // setProducts(data);
    // setFiltered(data);
    // setLoading(false);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (filters.category !== "All")
      result = result.filter((p) => p.category === filters.category);

    if (filters.price !== "All") {
      result = result.filter((p) => {
        const price = p.price;
        if (filters.price === "< ₹500") return price < 500;
        if (filters.price === "₹500 - ₹2000")
          return price >= 500 && price <= 2000;
        if (filters.price === "> ₹2000") return price > 2000;
        return true;
      });
    }

    if (filters.status !== "All")
      result = result.filter((p) => p.status === filters.status);

    setFiltered(result);
  }, [filters, products]);

  return (
    <div className="p-6 font-poppins bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Product Inventory</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Atom color="#fbbf24" size={60} text="" />
        </div>
      ) : (
        <>
          <Filters
            filters={filters}
            setFilters={setFilters}
            products={products}
          />
          <ProductTable data={filtered} />
        </>
      )}
    </div>
  );
};

export default App;
