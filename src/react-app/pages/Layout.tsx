import { ReactNode, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import EmailCaptureModal from "./EmailCaptureModal"; // ✅ Added import

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Track modal state

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Header/Nav */}
      <Navigation onOpenModal={() => setIsModalOpen(true)} /> {/* ✅ Pass trigger */}

      {/* Main content */}
      <main className="flex-grow relative overflow-visible z-0">
        {children}
      </main>

      {/* Email Capture Modal */}
      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> {/* ✅ Control modal */}

      {/* Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} /> {/* ✅ Pass trigger */}
    </div>
  );
}

