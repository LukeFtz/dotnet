import Navbar from "@/components/Common/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
      </div>
    </main>
  );
}
