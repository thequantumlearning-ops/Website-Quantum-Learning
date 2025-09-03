import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { X, Mail, Bell } from 'lucide-react';
export default function EmailCaptureModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email)
            return;
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
                setEmail('');
                setIsSubmitted(false);
            }, 2000);
        }, 1000);
    };
    if (!isOpen)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [_jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: onClose }), _jsxs("div", { className: "relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-600/50 max-w-md w-full transform transition-all duration-300 scale-100 animate-in fade-in zoom-in", children: [_jsx("button", { onClick: onClose, className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors", children: _jsx(X, { className: "w-5 h-5" }) }), !isSubmitted ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Bell, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Be First to Know!" }), _jsx("p", { className: "text-gray-300", children: "Get notified when our self-paced asynchronous courses launch. Plus receive exclusive early bird pricing!" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email address", className: "w-full pl-11 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all", required: true })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none", children: isSubmitting ? (_jsxs("div", { className: "flex items-center justify-center space-x-2", children: [_jsx("div", { className: "w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" }), _jsx("span", { children: "Subscribing..." })] })) : ('Notify Me When Available') })] }), _jsx("p", { className: "text-xs text-gray-400 text-center mt-4", children: "We respect your privacy. Unsubscribe at any time." })] })) : (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx("div", { className: "w-8 h-8 border-2 border-white rounded-full flex items-center justify-center", children: _jsx("div", { className: "w-2 h-4 border-r-2 border-b-2 border-white transform rotate-45 -mt-1" }) }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "You're All Set!" }), _jsx("p", { className: "text-gray-300", children: "We'll email you as soon as asynchronous courses are available, plus exclusive early access pricing." })] }))] })] }));
}
