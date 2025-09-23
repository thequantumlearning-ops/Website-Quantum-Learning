import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from './Navigation';
import Footer from './Footer';
export default function Layout({ children }) {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900", children: [_jsx(Navigation, {}), _jsx("main", { className: "relative", children: children }), _jsx(Footer, {})] }));
}
