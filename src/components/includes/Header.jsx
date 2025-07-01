export default function Header() {
  return (
    <header className="bg-black text-white p-6 shadow-md">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <img src="/logo.png" alt="IEEE 2025 Logo" className="h-10" />
        <h1 className="text-2xl font-bold">IEEE 2025</h1>
      </div>
    </header>
  );
}
