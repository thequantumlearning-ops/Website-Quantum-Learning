import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Video, Award, BookOpen, Target, Zap, Trophy, Crown, } from "lucide-react";
export default function Pricing() {
    useEffect(() => {
        const link = document.createElement("link");
        link.href =
            "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);
    return (_jsxs("div", { className: "relative pt-20", children: [_jsxs("div", { className: "absolute inset-0 opacity-30 -z-0", children: [_jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" }), _jsx("div", { className: "absolute top-40 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" })] }), _jsxs("section", { className: "relative text-center max-w-5xl mx-auto px-6 py-20", children: [_jsx("h1", { className: "text-5xl sm:text-6xl font-bold text-white mb-6", children: "Transform Your Child's Future" }), _jsx("p", { className: "text-xl text-gray-300 mb-8", children: "Give your child the confidence, leadership skills, and future-ready edge that traditional schools simply can't provide." }), _jsxs("div", { className: "flex justify-center gap-4 flex-wrap", children: [_jsx("span", { className: "px-4 py-2 bg-slate-800/50 rounded-full text-gray-200", children: "Limited Class Sizes" }), _jsx("span", { className: "px-4 py-2 bg-slate-800/50 rounded-full text-gray-200", children: "Expert Mentors" }), _jsx("span", { className: "px-4 py-2 bg-slate-800/50 rounded-full text-gray-200", children: "Premium Results" })] })] }), _jsxs("section", { className: "py-20 max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white text-center mb-12", children: "Core Courses - Available Now" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                            {
                                title: "Public Speaking & Communication",
                                description: "Transform your child into a confident communicator and natural leader",
                                base: "$250",
                                premium: "$325",
                            },
                            {
                                title: "Financial Literacy",
                                description: "Give your child the money skills that schools don't teach",
                                base: "$250",
                                premium: "$325",
                            },
                            {
                                title: "Innovation & Creativity",
                                description: "Unlock your child's creative genius and problem-solving superpowers",
                                base: "$250",
                                premium: "$325",
                            },
                        ].map((course, index) => (_jsxs("div", { className: "bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-lg hover:scale-105 transition-all duration-300", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: course.title }), _jsx("p", { className: "text-gray-300 mb-6", children: course.description }), _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4 text-center", children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Base" }), _jsx("div", { className: "text-blue-400 text-2xl font-bold", children: course.base })] }), _jsxs("div", { className: "bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-lg p-4 text-center border border-yellow-400", children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Premium" }), _jsx("div", { className: "text-yellow-400 text-2xl font-bold", children: course.premium })] })] }), _jsxs(Link, { to: "/schedule", className: "mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300", children: ["Start Building Confidence", _jsx(ArrowRight, { className: "ml-2 w-4 h-4" })] })] }, index))) })] }), _jsxs("section", { className: "py-20 bg-black/20 backdrop-blur-md", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white text-center mb-12", children: "Choose Your Success Package" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto", children: [
                            {
                                name: "Bronze",
                                emoji: "🥉",
                                price: "$500",
                                color: "from-slate-700 to-slate-600",
                                highlight: false,
                            },
                            {
                                name: "Silver",
                                emoji: "🥈",
                                price: "$800",
                                color: "from-gray-500 to-gray-700",
                                highlight: false,
                            },
                            {
                                name: "Gold",
                                emoji: "🥇",
                                price: "$995",
                                color: "from-yellow-400 via-orange-400 to-pink-500",
                                highlight: true,
                            },
                            {
                                name: "Platinum",
                                emoji: "💎",
                                price: "$1,400",
                                color: "from-purple-500 via-pink-500 to-yellow-500",
                                highlight: true,
                            },
                        ].map((pkg, index) => (_jsxs("div", { className: `rounded-2xl p-6 border ${pkg.highlight
                                ? "border-yellow-400 shadow-xl shadow-yellow-500/40 scale-105"
                                : "border-white/20"} bg-gradient-to-br ${pkg.color} text-white hover:scale-110 transition-transform duration-300`, children: [_jsxs("h3", { className: "text-2xl font-bold mb-2", children: [pkg.emoji, " ", pkg.name] }), _jsx("p", { className: "text-3xl font-bold mb-4", children: pkg.price }), _jsx("p", { className: "text-gray-200 text-sm mb-6", children: pkg.highlight
                                        ? "⭐ Premium Choice for Families"
                                        : "Great value starter option" }), _jsxs(Link, { to: "/schedule", className: "w-full inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all", children: [pkg.highlight ? "Join Now" : "Start Today", _jsx(ArrowRight, { className: "ml-2 w-4 h-4" })] })] }, index))) })] }), _jsxs("section", { className: "py-20 max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white text-center mb-12", children: "Enhance Your Experience" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                            {
                                icon: Users,
                                service: "1-on-1 Coaching",
                                base: "$75/hour",
                                premium: "$100/hour",
                            },
                            {
                                icon: Video,
                                service: "Private Virtual Showcase",
                                base: "$20-$40",
                                premium: "$25-$50",
                            },
                            {
                                icon: Award,
                                service: "Certificates",
                                base: "$10",
                                premium: "$30-$40",
                            },
                            {
                                icon: BookOpen,
                                service: "Portfolio Template",
                                base: "$5-$10",
                                premium: "$15-$20",
                            },
                            {
                                icon: Target,
                                service: "Parent Toolkit",
                                base: "$10-$20",
                                premium: "$20-$30",
                            },
                        ].map((s, i) => (_jsxs("div", { className: "bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 backdrop-blur-lg", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(s.icon, { className: "w-6 h-6 text-blue-400 mr-2" }), _jsx("h3", { className: "text-lg font-bold text-white", children: s.service })] }), _jsxs("p", { className: "text-gray-300 text-sm", children: ["Base:", " ", _jsx("span", { className: "font-bold text-blue-400", children: s.base }), " | Premium:", " ", _jsx("span", { className: "font-bold text-yellow-400", children: s.premium })] })] }, i))) })] }), _jsxs("section", { className: "py-20 bg-black/20 backdrop-blur-md", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white text-center mb-12", children: "Premium Experiences" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
                            {
                                icon: Zap,
                                title: "MasterClass Experience",
                                price: "$100",
                            },
                            {
                                icon: Trophy,
                                title: "Capstone Project Showcase",
                                price: "$300",
                            },
                            {
                                icon: Crown,
                                title: "Leadership Club",
                                price: "$150",
                            },
                        ].map((exp, i) => (_jsxs("div", { className: "bg-gradient-to-br from-yellow-400/20 to-pink-500/20 p-6 rounded-2xl border border-yellow-400 hover:scale-105 transition-transform", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(exp.icon, { className: "w-6 h-6 text-yellow-400 mr-2" }), _jsx("h3", { className: "text-lg font-bold text-white", children: exp.title })] }), _jsx("p", { className: "text-2xl font-bold text-yellow-300", children: exp.price })] }, i))) })] }), _jsxs("section", { className: "py-20 max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white text-center mb-12", children: "For Educators & Organizations" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-400/50", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Licensed Curriculum" }), _jsx("p", { className: "text-gray-300 mb-4", children: "Schools and tutors gain full rights to run Quantum Learning programs independently" }), _jsx("p", { className: "text-blue-400 font-bold", children: "Base: $750" }), _jsx("p", { className: "text-yellow-400 font-bold", children: "Premium: $1,200" })] }), _jsxs("div", { className: "bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "DIY Curriculum Modules (Coming Soon)" }), _jsx("p", { className: "text-gray-300 mb-4", children: "Professional PDFs, toolkits, and videos for independent learning" }), _jsx("p", { className: "text-blue-400 font-bold", children: "Base: $20-$50" }), _jsx("p", { className: "text-yellow-400 font-bold", children: "Premium: $40-$75" })] })] })] }), _jsxs("section", { className: "py-20 bg-black/20 backdrop-blur-md", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white text-center mb-12", children: "Questions? We Have Answers." }), _jsxs("div", { className: "max-w-3xl mx-auto space-y-6 text-gray-300", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white", children: "Can I customize my plan?" }), _jsx("p", { children: "Absolutely! You can customize the plan to your liking to make things more personalized for the student." })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white", children: "What's the difference between Base and Premium options?" }), _jsx("p", { children: "Base options provide excellent value with core features and digital delivery. Premium options include enhanced features, personalized support, and additional coaching." })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white", children: "What makes the Gold plan so popular?" }), _jsx("p", { children: "Gold offers two courses for less than buying separately, plus private showcases and priority registration." })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white", children: "Can I upgrade from Base to Premium later?" }), _jsx("p", { children: "Yes! You can upgrade any Base plan to Premium at any time by paying the difference." })] })] })] }), _jsxs("section", { className: "py-20 text-center", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-6 leading-normal", children: "Your Child's Success Story Starts Today" }), _jsxs(Link, { to: "/schedule", className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform", children: ["Schedule Free Consultation", _jsx(ArrowRight, { className: "ml-2 w-5 h-5" })] }), _jsx("p", { className: "text-sm text-gray-400 mt-4", children: "\u26A1 Limited spots filling fast" })] })] }));
}
