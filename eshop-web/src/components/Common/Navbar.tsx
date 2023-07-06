import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex h-32 w-full bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-between text-white">
      <div className="ms-10">
        <Image src="/Geral/logo.svg" alt="logo" width={102} height={86} />
      </div>
      <div className="me-10">Hello User</div>
      <div className="me-10">Product</div>
      <div className="me-10">Login</div>
    </nav>
  );
};

export default Navbar;
