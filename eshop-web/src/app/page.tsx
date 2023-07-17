import Navbar from "@/components/Common/Navbar";
import FrontPage from "@/components/Home/FrontPage";
import ProductList from "@/components/Home/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full h-cut-nav">
        <FrontPage />
      </div>
      <div className="w-full">
        <ProductList />
      </div>
    </main>
  );
}
