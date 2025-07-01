import { Outlet } from "react-router";

export const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="bg-black text-white p-6 shadow-md">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <img src="/logo.png" alt="IEEE 2025 Logo" className="h-10" />
          <h1 className="text-2xl font-bold">IEEE 2025</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2025 IEEE Project. All rights reserved.</p>
      </footer>
    </div>
  );
};
