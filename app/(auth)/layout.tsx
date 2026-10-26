export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen w-full grid grid-cols-2 gap-4">
    <div className="container flex flex-col items-center justify-center">
      <div className="m-auto max-w-90.5 w-full min-h-145.25">
        {children}
      </div>
    </div>
    <div className="bg-[url('/bg-auth.png')] bg-cover bg-no-repeat w-full h-screen" />
  </main>
}