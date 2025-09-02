import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  DollarSign,
  Lightbulb,
  Users,
  CheckCircle,
  Star,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative pt-20 min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 -z-0">
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative text-center max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Quantum Learning
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Innovative special skills education through Public Speaking,
          Financial Literacy, and Innovation programs
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/schedule"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Schedule Consultation
          </Link>
          <Link
            to="/pricing"
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center py-16">
        <div>
          <h3 className="text-4xl font-bold text-white">100%</h3>
          <p className="text-gray-400">Satisfaction Rate</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">3</h3>
          <p className="text-gray-400">Skilled Expert Instructors</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">24/7</h3>
          <p className="text-gray-400">Support Available</p>
        </div>
      </section>

      {/* Core Programs */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Core Programs
        </h2>
        <div className="grid sm:grid-cols-3 gap-10">
          <div className="bg-slate-800/40 p-8 rounded-2xl shadow-lg">
            <Brain className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Public Speaking & Communication
            </h3>
            <p className="text-gray-300">
              Build confidence, clarity, and critical thinking through
              structured speaking practice and peer feedback.
            </p>
          </div>
          <div className="bg-slate-800/40 p-8 rounded-2xl shadow-lg">
            <DollarSign className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Financial Literacy
            </h3>
            <p className="text-gray-300">
              Empowering students with age-appropriate financial knowledge for
              lifelong responsibility.
            </p>
          </div>
          <div className="bg-slate-800/40 p-8 rounded-2xl shadow-lg">
            <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Innovation & Entrepreneurship
            </h3>
            <p className="text-gray-300">
              Foster creativity, teamwork, and real-world problem-solving
              through hands-on projects.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What Our Families Say
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8 px-6">
          <div className="bg-slate-800/40 p-8 rounded-2xl shadow-lg">
            <p className="text-gray-300 italic mb-4">
              "Both of my children were fully engaged and excited throughout
              the class. The instructor made even difficult topics clear and
              relatable, while keeping the session interactive and fun."
            </p>
            <p className="text-blue-400 font-semibold">— Shefali Sarangal</p>
          </div>
          <div className="bg-slate-800/40 p-8 rounded-2xl shadow-lg">
            <p className="text-gray-300 italic mb-4">
              "Both of my children loved Quantum Learning. The classes were
              engaging, interactive, and made even challenging topics clear and
              fun."
            </p>
            <p className="text-blue-400 font-semibold">— Mukul Pal</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Learning Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of students who have discovered their potential through
          our innovative programs.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/schedule"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Get Started Today
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-800 hover:shadowxl transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}

