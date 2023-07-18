import React from "react";
import {
  productType,
  serverProductDetails,
} from "../../../../../types/product";
import { getProductDetail } from "../../../../../utils/functions/requests";

interface props {
  product: productType;
}

const getData = ({ product, id }: serverProductDetails) => {
  if (product) return product;
  getProductDetail(id);
};

const Page: React.FC<{ params: { id: string } } & props> = async ({
  params,
  product,
}) => {
  //   const data: productType = await getData({ product, id: params.id });
  getData({ product, id: params.id });

  return <div />;
};

export default Page;
