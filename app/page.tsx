import { LockIcon, SignUpIcon } from "@/components/icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <header className="bg-[url('/bg.png')] bg-cover bg-center h-screen w-screen pt-6">
        <nav className="container flex items-center">
          <div className="rounded-xl bg-background py-3.5 px-20 flex-1">
            <div className="flex items-center gap-16">
              <Link href="/"><Image src="/logo.png" alt="logo" width={158} height={22} /></Link>
              <ul className="flex items-center gap-4">
                <li><Link href="#"> Movies </Link></li>
                <li><Link href="#"> Cinemas </Link></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl bg-background py-3.5 px-20">
            <div className="flex items-center gap-16">
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="#" className="flex items-center gap-2 px-4">
                    <LockIcon />
                    Login
                  </Link>
                </li>
                <li className="text-primary">
                  <Link href="#" className="flex items-center gap-2 px-4">
                    <SignUpIcon />
                    Sign Up
                  </Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="max-w-185.75 w-full mx-auto mt-40 flex flex-col items-center gap-32 text-center">
          <div className="flex flex-col items-center gap-16 text-center">
            <div className="flex flex-col items-center gap-8 text-center">
              <h1 className="text-[80px] font-bold text-center text-white uppercase">
                Book Your Movie
                Tickets Now!
              </h1>
              <p className="text-xl">Watch the latest movies at your favorite cinemas</p>
            </div>
            <div className="flex items-center justify-center text-center">
              <Link href="#" className="flex items-center font-bold gap-2 px-4 py-3 rounded bg-primary text-background">
                Explore Movies
                <ArrowRight size={24} />
              </Link>
              <Link href="#" className="flex items-center font-bold gap-2 px-4 py-3 rounded text-white">
                Find Cinema
              </Link>
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="space-y-4">
              <strong className="text-4xl font-bold">500 +</strong>
              <p className="text-xl">Movies Available</p>
            </div>

            <div className="space-y-4">
              <strong className="text-4xl font-bold">150 +</strong>
              <p className="text-xl">Cinema Locations</p>
            </div>

            <div className="space-y-4">
              <strong className="text-4xl font-bold">1M +</strong>
              <p className="text-xl">Happy Customers</p>
            </div>

          </div>
        </div>
      </header>
    </main>
  );
}
