"use client";
import Link from "next/link";
import Navbar from "../../component/header/header";
export default function Home() {
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <h1 className="text-2xl">Welcome to Ecommerce Store</h1>
      <Link href="/product" className="text-blue-500">
        Go to Product Page
      </Link>
    </div>
  );
}
