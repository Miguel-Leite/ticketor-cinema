import { LockIcon, SignUpIcon } from "@/components/icons";
import { MovieCard } from "@/components";
import { ArrowRight, HistoryIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <header className="relative isolate bg-[url('/bg.png')] bg-cover bg-center h-screen w-screen pt-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/50 to-transparent" />
        <nav className="container flex items-center">
          <div className="rounded-xl bg-background py-3.5 px-20 flex-1">
            <div className="flex items-center gap-16">
              <Link href="/"><Image src="/logo.png" alt="logo" width={158} height={22} /></Link>
              <ul className="flex items-center font-medium gap-4">
                <li><Link href="#"> Movies </Link></li>
                <li><Link href="#"> Cinemas </Link></li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl bg-background py-3.5 px-20">
            <div className="flex items-center gap-16">
              <ul className="flex items-center font-medium gap-4">
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
      <main className="w-full p-6 text-center bg-linear-to-r from-[#0E0E11] via-[#292929] to-[#0E0E11] to-100%">
        <p className="text-xl font-bold">Special Offer: Buy 2 tickets, get 1 FREE! Valid this weekend only.
          Learn More</p>
      </main>
      <section className="bg-neutral-950 mt-24 py-5">
        <div className="container mb-24">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Currently In Cinemas</h2>
              <p className="text-neutral-400 text-xl font-bold">Discover the latest movies now playing in cinemas — Book your tickets today!</p>
            </div>
            <Link href="#" className="flex items-center gap-2 font-bold text-white">
              View All
              <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <MovieCard
                key={index}
                title="Revoir Paris"
                genre="Drama"
                rating={8.5}
                duration="1h 45m"
                ageRating="R"
                coverSrc="/covers/cover-01.png"
              />
            ))}
          </div>
        </div>

        <div className="container mb-36">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Top 10 movies this week </h2>
              <p className="text-neutral-400 text-xl font-bold">Hot this week: top movies and where to watch them.</p>
            </div>
            <Link href="#" className="flex items-center gap-2 font-bold text-white">
              View All
              <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <MovieCard
                key={index}
                title="Revoir Paris"
                genre="Drama"
                rating={8.5}
                duration="1h 45m"
                ageRating="R"
                coverSrc="/covers/cover-01.png"
              />
            ))}
          </div>
        </div>

        <div className="container space-y-8">
          <div className="max-w-190.75 w-full mx-auto text-center space-y-4">
            <h2 className="text-[42px] font-bold text-white leading-12">Now Showing with Festivals, Screenings and Special Offers</h2>
            <p className="text-neutral-400 text-xl font-bold">Unique film events and limited-time offers — don’t miss what’s coming next.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="max-h-90.75 relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10 flex items-end justify-center p-6">
                <div className="w-full h-full flex flex-col justify-between gap-5 p-8">
                  <div>
                    <span className="text-xs text-black font-semibold bg-primary py-2 px-3 rounded-lg inline-block">Special Event</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="space-y-4 flex-1">
                      <h3 className="text-neutral-100 text-5xl font-extrabold">Horror Film Festival</h3>
                      <p className="text-xl text-neutral-600">Spine-chilling classics</p>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                      <button className="flex items-center font-bold gap-2 px-4 py-3 rounded bg-primary text-background">
                        Learn More
                        <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/movies/movie-01.jpg" alt="cover" width={608} height={363} className="rounded object-contain w-full" />
            </div>
            <div className="max-h-90.75 relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10 flex items-end justify-center p-6">
                <div className="w-full h-full flex flex-col justify-between gap-5 p-8">
                  <div>
                    <span className="text-xs text-black font-semibold bg-primary py-2 px-3 rounded-lg inline-block">Limit Time</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="space-y-4 flex-1">
                      <h3 className="text-neutral-100 text-5xl font-extrabold">Student Discount</h3>
                      <p className="text-xl text-neutral-600 capitalize"><span className="text-cyan-600">50% off</span> all weekday matinee show</p>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                      <button className="flex items-center font-bold gap-2 px-4 py-3 rounded bg-primary text-background">
                        Learn More
                        <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/movies/movie-02.jpg" alt="cover" width={608} height={363} className="rounded object-contain w-full" />
            </div>
          </div>
        </div>

        <div className="container mt-40">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Coming Soon</h2>
              <p className="text-neutral-400 text-xl font-bold">Get ready for these upcoming releases</p>
            </div>
            <Link href="#" className="flex items-center gap-2 font-bold text-white">
              View All
              <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="rounded border border-neutral-800">
                <div className="relative overflow-hidden w-full max-h-79 p-1">
                  <Image
                    src="/covers/cover-02.png"
                    alt="cover"
                    width={217}
                    height={310}
                    className="rounded object-cover"
                  />
                </div>
                <div className="px-3 py-2.5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="font-bold text-white text-base">Les Chèvres!</h3>
                      <p className="text-neutral-400 text-xs">Comedy, History</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HistoryIcon size={14} className="text-neutral-400" />
                      <p className="font-bold text-white text-xs">2h 2m</p>
                    </div>
                  </div>
                  <p className="text-xs text-primary/70">Releases May 25, 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
