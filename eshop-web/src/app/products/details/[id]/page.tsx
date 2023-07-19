import React from "react";
import {
  productType,
  serverProductDetails,
} from "../../../../../types/product";
import { getProductDetail } from "../../../../../utils/functions/requests";
import Image from "next/image";
import Link from "next/link";

interface props {
  product: productType;
}

const getData = ({ product, id }: serverProductDetails) => {
  if (product) return product;
  return getProductDetail(id);
};

const Page: React.FC<{ params: { id: string } } & props> = async ({
  params,
  product,
}) => {
  const data: productType = await getData({ product, id: params.id });

  return (
    <main className="w-screen">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-3 mt-5 items-center">
          <div className="col-span-2">
            <Image
              src={data.imageUrl}
              height={520}
              width={844}
              alt={"Image " + data.name}
              layout="responsive"
              className="w-full aspect-video"
            />
          </div>
          <div className="text-center font-raleway space-y-10">
            <p className="text-4xl">{data.name}</p>
            <p className="text-5xl text-green-700">
              R$ {(Math.round(data.price * 100) / 100).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 font-raleway">
          <div
            className="col-start-2 col-end-4 text-center"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div />
          <div className="col-start-4 grid grid-cols-2  mt-20">
            <Link
              href={"#"}
              className="font-raleway w-full bg-gradient-to-r from-teal-300 via-teal-600 to-teal-300
                          text-center font-raleway text-white py-4 rounded-lg"
            >
              Add to cart
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20 mb-5">
          <div className="w-2/5">
            <Image
              src="/Geral/logo.svg"
              alt="logo"
              width={404}
              height={201}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
