import { productListType } from "../../types/product";
import { PRODUCT_LIST } from "../constants";

export const getProductList = async () => {
  try {
    const request = await fetch("https://localhost:4440" + PRODUCT_LIST);
    const data: productListType = await request.json();
    return data;
  } catch (e) {
    const data = {} as productListType;
    return data;
  }
};
