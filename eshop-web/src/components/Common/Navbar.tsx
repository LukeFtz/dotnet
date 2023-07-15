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
    <nav className="flex h-32 w-full bg-gradient-to-b from-navbar-blue to-transparent justify-center">
      <div
        className="container flex items-center justify-between
                  text-white font-raleway text-base transition-colors duration-300 ease-in-out"
      >
        <div className="ms-10">
          <Image src="/Geral/logo.svg" alt="logo" width={102} height={86} />
        </div>
        {data && <div className="me-10">Hello,{data.user?.name}</div>}
        {/* <div className="me-10">Hello,</div> */}
        <button
          className="me-10 rounded bg-black rounded-full py-2 px-5 hover:bg-sky-800"
          onClick={() => signOut()}
        >
          Products
        </button>
        <button
          className="me-10 rounded bg-black rounded-full py-2 px-5 hover:bg-emerald-800 "
          onClick={login}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
