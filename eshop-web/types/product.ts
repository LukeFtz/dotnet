export interface productType {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryName: string;
  imageUrl: string;
}
export interface productListType extends Array<productType> {}

export interface serverProductDetails {
  product: productType;
  id: string;
}
