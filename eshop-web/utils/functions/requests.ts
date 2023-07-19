import { GET, authOptions } from "@/app/api/auth/[...nextauth]/route";
import { productListType, productType } from "../../types/product";
import { API_HOST, PRODUCT_LIST } from "../constants";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

export const getProductList = async () => {
  try {
    const request = await fetch(API_HOST + PRODUCT_LIST);
    const data: productListType = await request.json();
    return data;
  } catch (e) {
    const data = {} as productListType;
    return data;
  }
};

export const getProductDetail = async (id: string) => {
  try {
    const request = await fetch(API_HOST + PRODUCT_LIST + "/" + id);
    const data: productType = await request.json();
    return data;
  } catch (e) {
    const data = {} as productType;
    return data;
  }
};
