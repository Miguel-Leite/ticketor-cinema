import { InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-40">
      <div className="container">
        <div className="grid grid-cols-8 gap-16">
          <div className="col-span-4">
            <div className="max-w-116 w-full space-y-8 mb-10">
              <div className="flex flex-col items-start gap-8">
                <Link href="/"><Image src="/logo.png" alt="logo" width={158} height={22} /></Link>
                <p className="text-sm text-neutral-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Link href="#"><InstagramIcon /></Link>
                  <Link href="#"><TwitterIcon /></Link>
                  <Link href="#"><LinkedInIcon /></Link>
                </div>
                <div className="grid grid-cols-2 gap-10 text-neutral-500 text-xs">
                  <div>
                    <p>Copyright © 2016 - 2025 Ticketor.
                      All right reserved. </p>
                  </div>
                  <div>
                    <p>Privacy Policy     Terms of service </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-medium text-neutral-100">Find a Movie</h3>
            <ul className="flex flex-col gap-2 mt-4 text-neutral-500 text-sm">
              <li><Link href="#">In Theaters</Link></li>
              <li><Link href="#">Top Movies</Link></li>
              <li><Link href="#">Coming Soon</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="font-medium text-neutral-100">Company</h3>
            <ul className="flex flex-col gap-2 mt-4 text-neutral-500 text-sm">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Partnerships</Link></li>
              <li><Link href="#">Get the App</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="font-medium text-neutral-100">Help</h3>
            <ul className="flex flex-col gap-2 mt-4 text-neutral-500 text-sm">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Subscription</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-full h-87.5 overflow-hidden bg-red-500">
        <Image src="/bg-footer.png" alt="footer" width={1440} height={351} className="object-contain w-full" />
      </div>
    </footer>
  );
}
