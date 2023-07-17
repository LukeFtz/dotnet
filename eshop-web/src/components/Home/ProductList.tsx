"use client";

import React, { useEffect, useState } from "react";
import { getProductList } from "../../../utils/functions/requests";
import { productListType } from "../../../types/product";
import Image from "next/image";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<productListType | null>(null);

  const requestProductData = async () => {
    const data = await getProductList();
    setProducts(data);
  };

  useEffect(() => {
    requestProductData();
  }, []);

  if (!products) {
    return (
      <div className="font-raleway text-center ">
        <h3 className="text-5xl mb-16">Products</h3>
        <div>Carregando Lista</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="font-raleway text-center ">
        <h3 className="text-5xl mb-16">Products</h3>
        <div>Nenhum produto encontrado</div>
      </div>
    );
  }

  return (
    <div className="container px-36 mx-auto w-full">
      <h3 className="font-raleway text-center text-5xl mb-16">Products</h3>
      <div className="grid grid-cols-3 w-full gap-4 gap-y-11">
        {products.map((product) => (
          <div key={product.id} className="text-white text-center font-raleway">
            <Image
              src={product.imageUrl}
              alt={product.name + " image"}
              width={1000}
              height={400}
              layout="responsive"
              className="w-full aspect-video"
            />
            <div
              className="bg-teal-600 p-5"
              dangerouslySetInnerHTML={{
                __html: product.description.substring(0, 300) + "...",
              }}
            />
            <div className="bg-teal-600 p-5 text-2xl">
              R$: {(Math.round(product.price * 100) / 100).toFixed(2)}
            </div>
            <button className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 py-3 w-full">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
