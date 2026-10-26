import { LockIcon, SignUpIcon } from "@/components/icons";
import { ComingSoonCard, FaqAccordion, Footer, MovieCard, TestimonialCard } from "@/components";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "“I messed up the showtime and customer support fixed it in under 5 minutes on chat. Didn’t even lose my loyalty points. Impressed.”",
    name: "John Doe",
    role: "Verified Customer",
    avatarSrc: "https://github.com/herlanderbento.png",
  },
  {
    quote:
      "“Three taps, ticket bought, QR scanned and done. This is how it should work.”",
    name: "John Doe",
    role: "Verified Customer",
    avatarSrc: "https://github.com/herlanderbento.png",
  },
  {
    quote:
      "“Booked two IMAX seats in 45 seconds; the live seat map never stuttered and highlighted rows I’d rated before. Nitpick: indie titles lurk under genre filters, an “arthouse” tab would take this from great to flawless.”",
    name: "John Doe",
    role: "Verified Customer",
    avatarSrc: "https://github.com/herlanderbento.png",
  },
  {
    quote:
      "“The dark mode and minimal pop-ups made late-night browsing painless. Other sites spam me with trailers auto-playing; this one respected my bandwidth.”",
    name: "John Doe",
    role: "Verified Customer",
    avatarSrc: "https://github.com/herlanderbento.png",
  },
  {
    quote:
      "“Wish list feature is underrated. I tagged three upcoming releases and got opening-night seat drops before they sold out.Chose recliners, prepaid popcorn, barcode flashed and doors opened without fuss.”",
    name: "John Doe",
    role: "Verified Customer",
    avatarSrc: "https://github.com/herlanderbento.png",
  },
  {
    quote: '"Ticketor consistently goes above and beyond my expectations.."',
    name: "John Doe",
    role: "Verified Customer",
    avatarSrc: "https://github.com/herlanderbento.png",
  },
];

const faqs = [
  {
    question: "How do I book movie tickets online?",
    answer:
      "Choose the movie, cinema and showtime, pick your seats on the live seat map, then complete the payment. Your tickets are sent instantly by email and are also available in your account.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Yes. You can cancel or change your booking up to 2 hours before the showtime from the “My Bookings” page. Refunds are returned to the original payment method within 5 business days.",
  },
  {
    question: "How do I receive my tickets?",
    answer:
      "Tickets are delivered by email as a QR code right after purchase. You can also access them in your account or add them to your digital wallet for faster entry at the cinema.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept major credit and debit cards, digital wallets and local payment methods. All transactions are encrypted and processed securely.",
  },
  {
    question: "Do you offer discounts or loyalty rewards?",
    answer:
      "Yes. We offer student and matinee discounts, seasonal promotions and a loyalty program where every purchase earns points that can be redeemed for tickets and snacks.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
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
          <div className="flex flex-col items-center gap-16 text-center">s
            <div className="flex flex-col items-center gap-8 text-center">
              <h1 className="text-[80px] font-bold text-center text-white uppercase">
                Book Your Movie
                Tickets Now!
              </h1>
              <p className="text-xl">Watch the latest movies at your favorite cinemas</p>
            </div>
            <div className="flex items-center justify-center text-center">
              <Link href="#" className="flex items-center font-bold gap-2 px-8 py-3 rounded bg-primary text-background border border-transparent">
                Explore Movies
                <ArrowRight size={24} />
              </Link>
              <Link href="#" className="flex items-center font-bold gap-2 px-8 py-3 rounded bg-transparent text-white border border-transparent">
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
      <div className="w-full p-6 text-center bg-linear-to-r from-[#0E0E11] via-[#292929] to-[#0E0E11] to-100%">
        <p className="text-xl font-bold">Special Offer: Buy 2 tickets, get 1 FREE! Valid this weekend only.
          Learn More</p>
      </div>
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
            <h2 className="text-[42px] font-bold text-white leading-12 uppercase">Now Showing with Festivals, Screenings and Special Offers</h2>
            <p className="text-neutral-400 text-xl font-bold capitalize">Unique film events and limited-time offers — don’t miss what’s coming next.</p>
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
                      <button className="flex items-center font-bold gap-2 px-8 py-3 rounded bg-primary text-background border border-transparent">
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
                      <button className="flex items-center font-bold gap-2 px-8 py-3 rounded bg-primary text-background border border-transparent">
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
              <ComingSoonCard
                key={index}
                title="Les Chèvres!"
                genre="Comedy, History"
                duration="2h 2m"
                releaseDate="Releases May 25, 2025"
                coverSrc="/covers/cover-02.png"
              />
            ))}
          </div>
        </div>

        <div className="container mt-40">
          <div className="grid grid-cols-2 bg-[#141418] rounded-2xl overflow-hidden">
            <div className="overflow-hidden">
              <Image src="/cinema.png" alt="cinema" width={654} height={503} className="rounded object-contain w-full" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-118 w-full space-y-20">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Book tickets to your favorite movies Online</h2>
                  <p className="text-neutral-200 text-xl">Get a sneak peek at the most popular current movie trailers and be the first to know about the hottest upcoming releases</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center font-bold gap-2 px-8 py-3 rounded bg-primary text-background border border-transparent">
                    Book Movie Ticket
                  </button>
                  <button className="flex items-center font-bold gap-2 px-8 py-3 rounded bg-transparent text-primary border border-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-40">
          <div className="max-w-190.75 w-full mx-auto text-center space-y-4">
            <h2 className="text-[42px] font-bold text-white leading-12 uppercase">Happy Customers</h2>
            <p className="text-neutral-400 text-xl font-bold capitalize">Hear what our satisfied moviegoers have to say</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-3 mt-20">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="container mt-40">
          <div className="max-w-190.75 w-full mx-auto text-center space-y-4">
            <h2 className="text-[42px] font-bold text-white leading-12 uppercase">Frequently Asked Questions</h2>
            <p className="text-neutral-400 text-xl font-bold capitalize">find answers to their most common questions quickly and easily.</p>
          </div>

          <div className="max-w-190.75 w-full mx-auto mt-20">
            <FaqAccordion items={faqs} />
          </div>
        </div>

        <div className="container mt-12 text-center space-y-6">
          <div className="max-w-190.75 w-full mx-auto text-center space-y-4">
            <h2 className="text-[42px] font-bold text-white leading-12">Still have a question?</h2>
            <p className="text-neutral-400 text-xl font-bold">Please contact us</p>
          </div>
          <Link href="#" className="inline-flex items-center font-bold gap-2 px-8 py-3 rounded bg-primary text-background border border-transparent">
            Contact US
          </Link>
        </div>

        <div className="container mt-40">
          <div className="max-w-160 w-full mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-[42px] font-bold text-white leading-12">Ready to watch & Book Movies? </h2>
              <p className="text-neutral-400 text-xl font-bold">Subscribe to our newsletter. Enter your email to create or restart your membership.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center px-3 rounded border border-neutral-700 flex-1">
                  <Mail size={16} className="text-neutral-400" />
                  <input type="email" placeholder="Enter your email" className="p-3 outline-none bg-transparent placeholder:text-neutral-500 text-neutral-200" />
                </div>
                <button className="inline-flex items-center font-bold gap-2 px-8 py-3 rounded bg-primary text-background border border-transparent">
                  Sign Up
                </button>
              </div>
              <div className="max-w-140">
                <p className="text-neutral-700">By clicking Sign Up you&apos;re confirming that you agree with our Terms and Conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
