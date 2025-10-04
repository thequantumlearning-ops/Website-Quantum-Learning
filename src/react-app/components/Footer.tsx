import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-black/30 backdrop-blur-lg border-t border-white/10 mt-20 py-8 text-center text-gray-400 text-sm">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <Link to="/privacy-policy" className="hover:text-white transition">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="hover:text-white transition">
          Terms of Service
        </Link>
        <Link to="/refund-policy" className="hover:text-white transition">
          Refund Policy
        </Link>
        <Link to="/cookie-policy" className="hover:text-white transition">
          Cookie Policy
        </Link>
        <Link to="/disclaimer" className="hover:text-white transition">
          Disclaimer
        </Link>
        <Link to="/code-of-conduct" className="hover:text-white transition">
          Code of Conduct
        </Link>
      </div>
      
      {/* Contact Email */}
      <p className="mb-2">
        Contact us at{" "}
        <a
          href="mailto:skillsvera.team@gmail.com"
          className="text-blue-400 hover:text-blue-300"
        >
          skillsvera.team@gmail.com
        </a>
      </p>

      <p>© {new Date().getFullYear()} © 2025 Skillsvera™ | All Rights Reserved.</p>
    </footer>
  );
}

