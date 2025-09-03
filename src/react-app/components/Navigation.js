import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/enterprise', label: 'Enterprise' },
        { href: '/schedule', label: 'Schedule Consultation' },
    ];
    const isActive = (href) => location.pathname === href;
    return (_jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-3 group", children: [_jsx("div", { className: "relative", children: _jsx("img", { src: "https://mocha-cdn.com/01988d47-f944-718c-9e9d-dec488cfbafd/Qunatum-learning.png", alt: "Quantum Learning", className: "w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200" }) }), _jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-slate-400 to-blue-500 bg-clip-text text-transparent", children: "Quantum Learning" })] }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: links.map((link) => (_jsx(Link, { to: link.href, className: `text-sm font-medium transition-colors ${isActive(link.href)
                                    ? 'text-blue-500'
                                    : 'text-gray-300 hover:text-white'}`, children: link.label }, link.href))) }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "text-gray-300 hover:text-white", children: isOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) }) })] }), isOpen && (_jsx("div", { className: "md:hidden", children: _jsx("div", { className: "px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-xl rounded-lg mt-2", children: links.map((link) => (_jsx(Link, { to: link.href, className: `block px-3 py-2 text-sm font-medium transition-colors rounded-lg ${isActive(link.href)
                                ? 'text-blue-500 bg-blue-500/10'
                                : 'text-gray-300 hover:text-white hover:bg-white/5'}`, onClick: () => setIsOpen(false), children: link.label }, link.href))) }) }))] }) }));
}
