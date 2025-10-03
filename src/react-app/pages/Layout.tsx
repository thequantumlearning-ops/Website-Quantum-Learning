import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "../components/Footer";

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      <Navigation onOpenModal={handleOpenModal} />

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

