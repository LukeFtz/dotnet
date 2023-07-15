import Image from "next/image";
import React from "react";
import sneakers from "../../../public/Home/sneakers.png";

const FrontPage: React.FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 w-full h-full">
      <div className="text-black col-start-1 mx-auto space-y-48 flex flex-col h-full">
        <div className="font-raleway text-center text-3xl mt-5">
          Hello, User
        </div>
        <div className="">
          <Image src="/Geral/logo.svg" alt="logo" width={404} height={201} />
        </div>
      </div>
      <div className="text-black col-end-4 col-span-2 h-full mx-auto my-auto">
        <Image src={sneakers} alt="sneakers" className="mt-10" />
      </div>
    </div>
  );
};

export default FrontPage;
