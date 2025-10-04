import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Users,
  Video,
  Award,
  BookOpen,
  Target,
  Gift,
  Calendar,
  Zap,
  Trophy,
  Crown,
  Sparkles,
} from "lucide-react";

export default function Pricing() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 -z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative text-center max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Transform Your Child's Future
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Give your child the confidence, leadership skills, and future-ready
          edge that traditional schools simply can't provide.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-gray-200">
            Limited Class Sizes
          </span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-gray-200">
            Expert Mentors
          </span>
          <span className="px-4 py-2 bg-slate-800/50 rounded-full text-gray-200">
            Premium Results
          </span>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Core Courses - Available Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Public Speaking & Communication",
              description:
                "Base ($325): Live weekly classes (2 hrs/week for 9 weeks), instructor feedback, basic digital certificate, access to class recordings, downloadable resources, project submission & evaluation, recap email.\n\nPremium ($375): Everything in Base, plus one 30-min private coaching session, private showcase with recording, printed personalized certificate mailed to student, expanded Digital Parent Toolkit, and portfolio template.",
              base: "$325",
              premium: "$375",
            },
            {
              title: "Financial Literacy",
              description:
                "Base ($325): Live weekly classes (2 hrs/week for 9 weeks), instructor feedback, basic digital certificate, access to class recordings, downloadable resources, project submission & evaluation, recap email.\n\nPremium ($375): Everything in Base, plus one 30-min private coaching session, private showcase with recording, printed personalized certificate mailed to student, expanded Digital Parent Toolkit, and portfolio template.",
              base: "$325",
              premium: "$375",
            },
            {
              title: "Innovation & Creativity",
              description:
                "Base ($325): Live weekly classes (2 hrs/week for 9 weeks), instructor feedback, basic digital certificate, access to class recordings, downloadable resources, project submission & evaluation, recap email.\n\nPremium ($375): Everything in Base, plus one 30-min private coaching session, private showcase with recording, printed personalized certificate mailed to student, expanded Digital Parent Toolkit, and portfolio template.",
              base: "$325",
              premium: "$375",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {course.title}
              </h3>
              <p className="text-gray-300 mb-6 whitespace-pre-line">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <h4 className="text-white font-semibold mb-2">Base</h4>
                  <div className="text-blue-400 text-2xl font-bold">
                    {course.base}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-lg p-4 text-center border border-yellow-400">
                  <h4 className="text-white font-semibold mb-2">Premium</h4>
                  <div className="text-yellow-400 text-2xl font-bold">
                    {course.premium}
                  </div>
                </div>
              </div>

              <Link
                to="/schedule"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
              >
                Start Building Confidence
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bundled Packages */}
      <section className="py-20 bg-black/20 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Choose Your Success Package
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Bronze",
              emoji: "🥉",
              price: "$495",
              description:
                "Includes 1 Core Course (choice of Public Speaking, Financial Literacy, or Innovation). Great value starter option.",
              color: "from-slate-700 to-slate-600",
              highlight: false,
            },
            {
              name: "Silver",
              emoji: "🥈",
              price: "$795",
              description:
                "Includes 1 Core Course + Summer Camp + Certificate + Membership. Balanced option with strong value.",
              color: "from-gray-500 to-gray-700",
              highlight: false,
            },
            {
              name: "Gold",
              emoji: "🥇",
              price: "$995",
              description:
                "Includes 2 Core Courses + Summer Camp + Membership + Homework Help + 2 hrs Coaching + Toolkit/Portfolio. Most popular choice with $200 savings vs separate purchases.",
              color: "from-yellow-400 via-orange-400 to-pink-500",
              highlight: true,
            },
            {
              name: "Platinum",
              emoji: "💎",
              price: "$1,400",
              description:
                "Includes everything in Gold + Extra Coaching + Showcase + DIY Curriculum Modules + Premium Certificate. Ultimate all-in-one package.",
              color: "from-purple-500 via-pink-500 to-yellow-500",
              highlight: true,
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border ${
                pkg.highlight
                  ? "border-yellow-400 shadow-xl shadow-yellow-500/40 scale-105"
                  : "border-white/20"
              } bg-gradient-to-br ${pkg.color} text-white hover:scale-110 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">
                {pkg.emoji} {pkg.name}
              </h3>
              <p className="text-3xl font-bold mb-4">{pkg.price}</p>
              <p className="text-gray-200 text-sm mb-6">{pkg.description}</p>
              <Link
                to="/schedule"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
              >
                {pkg.highlight ? "Join Now" : "Start Today"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Enhance Your Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              service: "1-on-1 Coaching",
              description:
                "Personalized one-on-one sessions with instructors for feedback, guidance, and growth.",
              base: "$75/hour",
              premium: "$100/hour",
            },
            {
              icon: Video,
              service: "Private Virtual Showcase",
              description:
                "20–30 min private session with live feedback and certificate presentation for family.",
              base: "$25",
              premium: "$50",
            },
            {
              icon: Award,
              service: "Certificates",
              description:
                "Digital certificate included. Premium versions are printed, personalized, and foil-stamped.",
              base: "$30",
              premium: "$40",
            },
            {
              icon: BookOpen,
              service: "Portfolio Template",
              description:
                "Editable templates (Canva or Google Docs) to showcase your child’s projects.",
              base: "$15",
              premium: "$20",
            },
            {
              icon: Target,
              service: "Parent Toolkit",
              description:
                "Includes goal tracker, feedback forms, project checklist, and personalized resources.",
              base: "$20",
              premium: "$30",
            },
            {
              icon: Calendar,
              service: "Summer Intensive Camp",
              description:
                "4–5 days, 2–3 hrs per day. Interactive deep-dive into our core subjects.",
              base: "$300",
              premium: "$400",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 backdrop-blur-lg"
            >
              <div className="flex items-center mb-4">
                <s.icon className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-lg font-bold text-white">{s.service}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-2">{s.description}</p>
              <p className="text-gray-300 text-sm">
                Base:{" "}
                <span className="font-bold text-blue-400">{s.base}</span> | Premium:{" "}
                <span className="font-bold text-yellow-400">{s.premium}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Experiences */}
      <section className="py-20 bg-black/20 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Premium Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Zap,
              title: "MasterClass Experience",
              description:
                "2–3 hour immersive weekend class covering the entire curriculum with activities and a mid-session break.",
              price: "$100",
            },
            {
              icon: Trophy,
              title: "Capstone Project Showcase",
              description:
                "End-of-year comprehensive project where students present a debate, TED talk, business prototype, or innovation model with feedback.",
              price: "$300",
            },
            {
              icon: Crown,
              title: "Leadership Club",
              description:
                "Exclusive club where students learn without boundaries. Tutors share advanced skills in an accessible format.",
              price: "$150",
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-yellow-400/20 to-pink-500/20 p-6 rounded-2xl border border-yellow-400 hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-4">
                <exp.icon className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-lg font-bold text-white">{exp.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
              <p className="text-2xl font-bold text-yellow-300">{exp.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Licensing */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          For Educators & Organizations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-400/50">
            <h3 className="text-xl font-bold text-white mb-2">
              Licensed Curriculum
            </h3>
            <p className="text-gray-300 mb-4">
              Schools and tutors gain rights to run Skillsvera programs independently.
            </p>
            <p className="text-blue-400 font-bold">Base: $500</p>
            <p className="text-yellow-400 font-bold">Premium: $899</p>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              DIY Curriculum Modules
            </h3>
            <p className="text-gray-300 mb-4">
              Professional PDFs, toolkits, and videos for independent learning.
            </p>
            <p className="text-blue-400 font-bold">Base: $20</p>
            <p className="text-yellow-400 font-bold">Premium: $40</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black/20 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Questions? We Have Answers.
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
          <div>
            <h3 className="font-semibold text-white">Can I customize my plan?</h3>
            <p>
              Absolutely! You can customize the plan to your liking to make things
              more personalized for the student.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              What's the difference between Base and Premium options?
            </h3>
            <p>
              Base options provide excellent value with core features and digital
              delivery. Premium options include enhanced features, personalized
              support, and additional coaching.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              What makes the Gold plan so popular?
            </h3>
            <p>
              Gold offers two courses for less than buying separately, plus private
              showcases and priority registration.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Can I upgrade from Base to Premium later?
            </h3>
            <p>
              Yes! You can upgrade any Base plan to Premium at any time by paying
              the difference.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-50 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-normal">
          Your Child's Success Story Starts Today
        </h2>
        <Link
          to="/schedule"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
        >
          Schedule Free Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <p className="text-sm text-gray-400 mt-4">
          ⚡ Limited spots filling fast
        </p>
      </section>
    </div>
  );
}

