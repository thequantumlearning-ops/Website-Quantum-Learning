import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Calendar, User, CheckCircle } from 'lucide-react';
export default function Schedule() {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);
    return (_jsxs("div", { className: "pt-16", children: [_jsxs("section", { className: "relative py-20", children: [_jsxs("div", { className: "absolute inset-0 opacity-30 pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-10 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-32 right-32 w-[36rem] h-[36rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" })] }), _jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h1", { className: "text-4xl sm:text-6xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent mb-6", children: "Schedule Your Consultation" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Book a free consultation to learn how Quantum Learning can help unlock your child's potential through our innovative special skills programs." })] })] }), _jsx("section", { className: "py-20 bg-black/20 backdrop-blur-sm", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-4", children: "What to Expect" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Your personalized consultation will help us understand your goals and recommend the perfect program" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                                {
                                    icon: User,
                                    title: "Personalized Assessment",
                                    description: "We'll discuss your child's current skills, interests, and learning goals to create a tailored recommendation."
                                },
                                {
                                    icon: Calendar,
                                    title: "Program Overview",
                                    description: "Learn about our synchronous and asynchronous programs, curriculum details, and scheduling options."
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Next Steps",
                                    description: "Get a clear path forward with enrollment information, pricing details, and start date options."
                                }
                            ].map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4", children: _jsx(Icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-gray-300", children: benefit.description })] }, index));
                            }) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-4", children: "Schedule Your Free Consultation" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Book directly with our calendar system. Select a time that works best for you and we'll send you the meeting details instantly." })] }), _jsx("div", { className: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10", children: _jsx("div", { className: "bg-white rounded-2xl overflow-hidden", children: _jsx("iframe", { src: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ04061KRGDe35juaJ0rrO3IYHo81mdFEeTIJTVUgjjmXp4joK9Odul3MqX_4SDY6ilqZ_mxMCNQ?gv=true", style: { border: 0 }, width: "100%", height: "600", frameBorder: "0", scrolling: "no", className: "rounded-2xl" }) }) }), _jsx("div", { className: "text-center mt-8", children: _jsxs("p", { className: "text-gray-400 text-sm", children: ["Having trouble viewing the calendar? Email us directly at", ' ', _jsx("a", { href: "mailto:thequantumlearning@gmail.com", className: "text-blue-400 hover:text-blue-300 transition-colors", children: "thequantumlearning@gmail.com" }), ' ', "or call to schedule your consultation."] }) })] }) }), _jsx("section", { className: "py-20 bg-black/20 backdrop-blur-sm", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "text-center mb-16", children: _jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-white mb-4", children: "Consultation FAQ" }) }), _jsx("div", { className: "space-y-6", children: [
                                {
                                    question: "How long is the consultation?",
                                    answer: "Consultations typically last 30-45 minutes, giving us enough time to understand your needs and explain our programs in detail."
                                },
                                {
                                    question: "Is the consultation really free?",
                                    answer: "Yes, absolutely! There's no cost or obligation. We want to make sure our programs are the right fit for your family before you enroll."
                                },
                                {
                                    question: "What should I prepare for the consultation?",
                                    answer: "Come with questions about your child's learning goals, any specific skills you'd like them to develop, and your family's schedule preferences."
                                },
                                {
                                    question: "Can both parents attend?",
                                    answer: "Of course! We encourage both parents to join the consultation. We can also accommodate different time zones for separated families."
                                },
                                {
                                    question: "What if I need to reschedule?",
                                    answer: "No problem! Just email us or call, and we'll find a new time that works better for your schedule."
                                }
                            ].map((faq, index) => (_jsxs("div", { className: "bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: faq.question }), _jsx("p", { className: "text-gray-300", children: faq.answer })] }, index))) })] }) })] }));
}
