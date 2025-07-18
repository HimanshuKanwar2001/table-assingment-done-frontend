import React, { useState } from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ data }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const onToggleSelect = (productId) => {
    setSelectedIds((prev) => {
      const updated = new Set(prev);
      updated.has(productId)
        ? updated.delete(productId)
        : updated.add(productId);
      return updated;
    });
  };
  return (
    <div className="w-full overflow-x-auto rounded-2xl p-6 shadow bg-white ">
      <table className="min-w-[800px] w-full table-auto text-sm">
        <thead className="bg-gray-100 text-left ">
          <tr>
            <th className="p-5 whitespace-nowrap rounded-l-2xl ">ID</th>
            <th className="p-5 whitespace-nowrap">Name</th>
            <th className="p-5 whitespace-nowrap">Category</th>
            <th className="p-5 whitespace-nowrap">Price</th>
            <th className="p-5 whitespace-nowrap rounded-r-2xl">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((product) => (
              <ProductRow
                key={product.product_id}
                product={product}
                isSelected={selectedIds.has(product.product_id)}
                onToggleSelect={() => onToggleSelect(product.product_id)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
