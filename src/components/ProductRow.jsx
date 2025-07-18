import React from "react";

const ProductRow = ({ product, isSelected, onToggleSelect }) => {
  const { product_id, product_name, category, price, status } = product;

  return (
    <tr
      onClick={onToggleSelect}
      className={`transition duration-200  rounded-lg   m-5 ${
        isSelected ? "bg-yellow-200" : "hover:bg-amber-100 "
      }`}
    >
      {/* Checkbox */}
      <td className="px-4 py-4 rounded-l-2xl ">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          //   size={50}
          className="form-checkbox size-4 rounded text-yellow-500 focus:ring-yellow-400"
        />
      </td>

      {/* Product Name + ID */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
            {product_name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{product_name}</div>
            <div className="text-xs text-gray-500">ID: {product_id}</div>
          </div>
        </div>
      </td>

      {/* Category */}
      <td className="px-4 py-4 text-sm text-gray-700">{category}</td>

      {/* Price */}
      <td className="px-4 py-4 text-sm font-medium text-gray-800">
        ₹{price.toLocaleString()}
      </td>

      {/* Status */}
      <td className="px-4 py-4 rounded-r-2xl">
        <span
          className={`inline-block px-3  py-2 text-xs font-bold rounded-full ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
};

export default ProductRow;
