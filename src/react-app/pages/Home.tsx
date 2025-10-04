import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-start overflow-hidden">
      {/* ===== BACKGROUND BLOBS ===== */}
      <div className="absolute inset-0 opacity-30 -z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="text-center mt-16 px-6 relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-300 via-blue-500 to-blue-400 bg-clip-text text-transparent leading-normal pb-2">
          Skillsvera
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Innovative special skills education through Public Speaking,
          Financial Literacy, and Innovation programs
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            to="/schedule"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Schedule Consultation
          </Link>
          <Link
            to="/pricing"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="mt-20 flex flex-col sm:flex-row gap-10 text-center text-gray-300 relative z-10">
        <div>
          <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
          <p className="leading-relaxed">Satisfaction Rate</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white mb-2">3</h3>
          <p className="leading-relaxed">Skilled Expert Instructors</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
          <p className="leading-relaxed">Support Available</p>
        </div>
      </section>

      {/* ================= CORE PROGRAMS ================= */}
      <section className="mt-28 px-6 max-w-5xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Core Programs
        </h2>
        <p className="text-center text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
          Comprehensive education designed to prepare students for success in
          the modern world
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Public Speaking */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Public Speaking & Communication
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Build confidence, clarity, and critical thinking through structured speaking practice and peer feedback.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Presentation Skills</li>
              <li>• Debate Practice</li>
              <li>• Storytelling</li>
              <li>• Public Confidence</li>
            </ul>
          </div>
          {/* Financial Literacy */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Financial Literacy</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with age-appropriate financial knowledge for lifelong responsibility.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Money Management</li>
              <li>• Budgeting Basics</li>
              <li>• Investment Fundamentals</li>
              <li>• Smart Spending</li>
            </ul>
          </div>
          {/* Innovation */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Innovation & Entrepreneurship</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Foster creativity, teamwork, and real-world problem-solving through hands-on projects.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Creative Thinking</li>
              <li>• Business Planning</li>
              <li>• Problem Solving</li>
              <li>• Team Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FLEXIBLE OPTIONS ================= */}
      <section className="mt-28 px-6 max-w-5xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          Flexible Learning Options
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Synchronous */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Synchronous Classes</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Live, interactive sessions with real-time feedback and peer collaboration through Zoom/Google Meet.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Live instructor interaction</li>
              <li>• Real-time peer feedback</li>
              <li>• Group activities & discussions</li>
            </ul>
          </div>
          {/* Asynchronous */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg relative">
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
              Coming Soon!
            </div>
            <h3 className="text-2xl font-semibold mb-4">Asynchronous Learning</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Self-paced learning with pre-recorded lessons and flexible scheduling for busy families.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Learn at your own pace</li>
              <li>• 24/7 access to materials</li>
              <li>• Weekly instructor check-ins</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="mt-28 px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl font-bold mb-12">What Our Families Say</h2>
        <div className="space-y-12">
          <blockquote className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-gray-300 mb-6 leading-relaxed">
              "Both of my children were fully engaged and excited throughout the class. The instructor made even difficult topics clear and relatable, while keeping the session interactive and fun. Quantum Learning creates an environment where learning feels both enjoyable and impactful."
            </p>
            <footer className="text-gray-400 font-semibold">
              — Shefali Sarangal, Parent
            </footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-gray-300 mb-6 leading-relaxed">
              "Both of my children loved Skillsvera. The classes were engaging, interactive, and made even challenging topics clear and fun. They've gained confidence, new skills, and come out of each session excited to share what they've learned."
            </p>
            <footer className="text-gray-400 font-semibold">
              — Mukul Pal, Parent
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-28 text-center px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-24">
          Ready to Transform Your Learning Journey?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of students who have discovered their potential through our innovative programs.
        </p>
        <div className="flex justify-center gap-6 mb-24">
          <Link
            to="/schedule"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started Today
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

