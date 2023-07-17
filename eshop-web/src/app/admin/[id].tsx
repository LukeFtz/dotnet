import Navbar from "@/components/Common/Navbar";
import React from "react";

const ProductManager: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between font-mono text-sm flex">
        <Navbar />
      </div>
    </main>
  );
};

export default ProductManager;
