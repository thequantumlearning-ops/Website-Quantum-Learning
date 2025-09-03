import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (_jsx("header", { className: "bg-indigo-600 text-white shadow", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between", children: [_jsx("h1", { className: "text-xl font-bold", children: "Quantum Learning" }), _jsxs("nav", { className: "flex gap-6 text-sm font-medium", children: [_jsx(Link, { to: "/", className: "hover:text-gray-200", children: "Home" }), _jsx(Link, { to: "/pricing", className: "hover:text-gray-200", children: "Pricing" }), _jsx(Link, { to: "/schedule", className: "hover:text-gray-200", children: "Schedule" }), _jsx(Link, { to: "/enterprise", className: "hover:text-gray-200", children: "Enterprise" }), _jsx(Link, { to: "/about", className: "hover:text-gray-200", children: "About" })] })] }) }));
}
