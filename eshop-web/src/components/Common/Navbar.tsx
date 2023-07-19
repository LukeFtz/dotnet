"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { data } = useSession();

  const login = () => {
    signIn("duende", {
      redirect: true,
      // callbackUrl: "https://localhost:3050/",
    });
  };
  return (
    <nav className="flex h-32 w-full bg-gradient-to-b from-navbar-blue to-transparent justify-center">
      <div
        className="container flex items-center justify-between
                  text-white font-raleway text-base transition-colors duration-300 ease-in-out"
      >
        <Link href="/" className="ms-10">
          <Image src="/Geral/logo.svg" alt="logo" width={102} height={86} />
        </Link>
        {data && <div className="me-10">Hello, {data.user?.name}</div>}
        {/* <div className="me-10">Hello,</div> */}
        <Link
          href="/admin/products"
          className="me-10 rounded bg-black rounded-full py-2 px-5 hover:bg-sky-800"
        >
          Products
        </Link>
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
