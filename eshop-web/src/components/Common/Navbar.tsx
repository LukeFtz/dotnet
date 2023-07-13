"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const { data } = useSession();

  const login = () => {
    signIn("duende", {
      redirect: true,
      callbackUrl: "https://localhost:3050/",
    });
  };
  console.log(data);
  return (
    <nav className="flex h-32 w-full bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-between text-white">
      <div className="ms-10">
        <Image src="/Geral/logo.svg" alt="logo" width={102} height={86} />
      </div>
      {data && <div className="me-10">Hello,{data.user?.name}</div>}
      {/* <div className="me-10">Hello,</div> */}
      <div className="me-10" onClick={() => signOut()}>
        Product
      </div>
      <div className="me-10" onClick={login}>
        Login
      </div>
    </nav>
  );
};

export default Navbar;
