import { productListType } from "../../types/product";
import { PRODUCT_LIST } from "../constants";

export const getProductList = async () => {
  try {
    const request = await fetch(process.env.API_HOST + PRODUCT_LIST);
    const data: productListType = await request.json();
    return data;
  } catch (e) {
    console.log(e);
    const data = {} as productListType;
    return data;
  }
};
