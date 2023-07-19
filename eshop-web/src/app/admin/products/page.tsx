import Image from "next/image";
import Table from "./Table";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { productListType } from "../../../../types/product";
import { getProductList } from "../../../../utils/functions/requests";

// export const getServerSideProps: GetServerSideProps<{
//   productsList: productListType;
// }> = async () => {
//   const data = await getProductList();
//   return { props: { productsList: data } };
// };
const getData = async () => {
  const data = await getProductList();
  return data;
};

const Products = async () => {
  const data = await getData();
  return (
    <main className="w-screen">
      <div className="container mx-auto flex flex-col items-center">
        <div>
          <Image
            src="/Geral/logo.svg"
            alt="logo"
            width={404}
            height={201}
            layout="responsive"
          />
        </div>
        <p className="font-raleway text-center text-xl mt-5">
          Managing Products
        </p>
        <div className="text-center mt-28 font-raleway">
          <span className="text-base">Here is the</span>
          <span className="text-3xl"> Product List</span>
        </div>
        <div className="mt-16 mb-3 self-end font-raleway text-2xl me-5">
          Add new Product <span>ICON</span>
        </div>
        {data.length > 0 ? (
          <Table products={data} />
        ) : (
          <div className="text-center font-raleway">No products found</div>
        )}
      </div>
    </main>
  );
};

export default Products;
