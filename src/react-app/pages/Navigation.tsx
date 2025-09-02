import { Link } from "react-router-dom";

interface NavigationProps {
  onOpenModal: () => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  return (
    <nav className="bg-slate-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo/Brand */}
        <div className="text-white font-bold text-lg">Quantum Learning</div>

        {/* Right: Links + Button */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-200 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-200 hover:text-white">
            About
          </Link>
          <Link to="/pricing" className="text-gray-200 hover:text-white">
            Pricing
          </Link>
          <Link to="/schedule" className="text-gray-200 hover:text-white">
            Schedule
          </Link>
          <Link to="/enterprise" className="text-gray-200 hover:text-white">
            Enterprise
          </Link>

          {/* Join Mailing List Button */}
          <button
            onClick={onOpenModal}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Join Mailing List
          </button>
        </div>
      </div>
    </nav>
  );
}

