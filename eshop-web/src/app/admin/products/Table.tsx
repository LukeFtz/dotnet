import React from "react";
import { productListType } from "../../../../types/product";

// import { Container } from './styles';

interface props {
  products: productListType;
}

const Table: React.FC<props> = ({ products }) => {
  console.log(products);
  return (
    <div className="w-full border border-teal-500 p-5 font-raleway">
      <table className="table-auto w-full ">
        <thead className="font-medium text-xl">
          <tr>
            <th className="w-1/2">Product Name</th>
            <th>Category</th>
            <th className="w-32">Price</th>
            <th className="w-14">Edit</th>
            <th className="w-14">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-slate-200">
              <th className="w-1/2">{product.name}</th>
              <th>{product.categoryName}</th>
              <th className="w-32">
                R$ {(Math.round(product.price * 100) / 100).toFixed(2)}
              </th>
              <th className="w-14">Edit</th>
              <th className="w-14">Delete</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
