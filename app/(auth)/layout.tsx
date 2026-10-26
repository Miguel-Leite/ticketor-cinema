export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen w-full grid grid-cols-2 gap-4">
    <div>
      {children}
    </div>
    <div className="bg-[url('/bg-auth.png')] bg-cover bg-no-repeat w-full h-screen" />
  </main>
}