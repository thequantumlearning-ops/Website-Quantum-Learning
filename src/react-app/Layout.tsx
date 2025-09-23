import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Header */}
      <Navigation />

      {/* Page Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

