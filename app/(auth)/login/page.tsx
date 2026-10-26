import { Button, Input } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Link href="/"><Image src="/logo.png" alt="logo" width={158} height={22} /></Link>
        <h1 className="text-3xl font-bold text-white capitalize">Sign in</h1>
      </div>
      <form className="space-y-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="enail">E-mail</label>
          <Input placeholder="name@example.com" containerClassName="bg-neutral-900 border-neutral-800" />
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <label htmlFor="enail">Password</label>
            <Input type="password" placeholder="Enter your password" containerClassName="bg-neutral-900 border-neutral-800" />
          </div>
          <div className="text-end space-x-1.5 text-xs">
            <Link href="#" className="text-primary">Forgot your password?</Link>
          </div>
        </div>
        <Button className="w-full">Sign in</Button>
      </form>
    </div>
  )
}